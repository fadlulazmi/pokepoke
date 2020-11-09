import axios from 'axios';
import toast from 'toasted-notes'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const getStorage = key => {
  const storage = localStorage.getItem(key)
  return JSON.parse(storage)
}

const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export function getList(endpoint) {
  return async (dispatch) => {
    try {
      if(!endpoint){
        dispatch({
          type: 'GET_LIST_POKEMON',
          payload: {
            next: '',
            results: []
          }
        });
      }
      const url = endpoint || `${BASE_URL}?offset=0&limit=20`;
      const { data } = await axios({ url });
      const myPokemon = getStorage('myPokemon')
      let updatedListPokemon = [...data.results]
      updatedListPokemon = updatedListPokemon.map(el => {
        let flag = false
        if(myPokemon){
          myPokemon.forEach(pokemon => {
            if(el.name === pokemon.name){
              el = {
                ...el,
                owned: pokemon.owned
              }
              flag = true
            }
          });
        }
        if(!flag){
          return {
            ...el,
            owned: 0
          }
        } else {
          return el
        }
      })
      dispatch({
        type: 'GET_LIST_POKEMON',
        payload: {
          ...data,
          results: updatedListPokemon
        }
      });
    } catch (error) {
      dispatch({
        type: 'FAILED',
        payload: error
      });
    }
  };
}

export function getDetail(pokemonName) {
  return async dispatch => {
    try {
      dispatch({
        type: 'GET_DETAIL_POKEMON',
        payload: null
      })
      const { data } = await axios({
        url: `${BASE_URL}/${pokemonName}`
      });
      dispatch({
        type: 'GET_DETAIL_POKEMON',
        payload: data
      });
    } catch (error) {
      dispatch({
        type: 'FAILED',
        payload: error
      });
    }
  };
}

export function catchPokemon(pokemon) {
  return (dispatch, getState) => {
    const isCatched = Math.floor(Math.random() * Math.floor(2));
    if(isCatched){
      const { myPokemon } = getState()
      const updatedMyPokemon = [...myPokemon]
      let flag = true
      updatedMyPokemon.forEach(el => {
        if(el.name === pokemon.name){
          el.owned += 1
          flag = false
        }
      })
      if(flag){
        updatedMyPokemon.push({...pokemon, owned: 1})
      }
      setStorage('myPokemon', JSON.stringify(updatedMyPokemon))
      toast.notify(`Yeah! you catch ${pokemon.name}`, { duration: 1000})
      dispatch(getList())
      dispatch({
        type: 'CATCH_POKEMON',
        payload: updatedMyPokemon
      });
    } else {
      toast.notify(`Ooops.. failed to catch ${pokemon.name} :(`, { duration: 1000})
      dispatch({
        type: 'FAILED',
        payload: {
          message: `sorry, you failed to catch ${pokemon.name} :(`
        }
      });
    }
  };
}

export function getFavorite(){
  return dispatch => {
    const myPokemon = getStorage('myPokemon')
    dispatch({
      type: 'REMOVE_POKEMON',
      payload: myPokemon || []
    });
  };
}

export function removeFavorite(pokemonId){
  return (dispatch, getState) => {
    const { myPokemon } = getState();
    const updatedMyPokemon = [...myPokemon]
    let indexRemoveObject = false;
    updatedMyPokemon.forEach((el, i) => {
      if(el.id === pokemonId){
        if(el.owned > 1){
          el.owned -= 1
        } else if (el.owned === 1){
          indexRemoveObject = i
        }
      }
    });
    if(indexRemoveObject !== false){
      updatedMyPokemon.splice(indexRemoveObject, 1)
    }
    setStorage('myPokemon', JSON.stringify(updatedMyPokemon))
    dispatch(getDetail())
    dispatch({
      type: 'REMOVE_POKEMON',
      payload: updatedMyPokemon
    });
  };
}
