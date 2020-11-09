import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export function getList(endpoint) {
  return async (dispatch, getState) => {
    try {
      const url = endpoint || `${BASE_URL}?offset=0&limit=20`;
      const { data } = await axios({ url });
      const {myPokemon} = getState()
      const updateList = [...data.results].map(el => {
        const getOwned = myPokemon.filter(pokemon => pokemon.name === el.name)
        return {
          ...el,
          owned: getOwned.length
        }
      })
      dispatch({
        type: 'GET_LIST_POKEMON',
        payload: {
          ...data,
          results: updateList
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
  return dispatch => {
    const isCatched = Math.floor(Math.random() * Math.floor(2));
    if(isCatched){
      dispatch({
        type: 'CATCH_POKEMON',
        payload: pokemon
      });
    } else {
      dispatch({
        type: 'FAILED',
        payload: {
          message: `sorry, you failed to catch ${pokemon.name} :(`
        }
      });
    }
  };
}

export function removeFavorite(pokemonId){
  return (dispatch, getState) => {
    const { myPokemon } = getState();
    const updatedFavorites = myPokemon.filter(el => el.id !== pokemonId);
    dispatch({
      type: 'REMOVE_POKEMON',
      payload: updatedFavorites
    });
  };
}
