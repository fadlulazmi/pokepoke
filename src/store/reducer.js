const initState = {
  error: '',
  listPokemon: [],
  detailPokemon: null,
  myPokemon: [],
  nextFetchedList: ''
};

export default function reducer(state = initState, action) {
  const { results, next, message } = action.payload || {};
  switch (action.type) {
  case 'GET_LIST_POKEMON':
    return {
      ...state,
      listPokemon: results.length > 0 ? [...state.listPokemon].concat(results) : results ,
      nextFetchedList: next || 'end'
    };
  case 'GET_DETAIL_POKEMON':
    return {
      ...state,
      detailPokemon : action.payload
    };
  case 'CATCH_POKEMON':
    return {
      ...state,
      myPokemon:  action.payload
    };
  case 'REMOVE_POKEMON':
    return {
      ...state,
      myPokemon : action.payload
    };
  case 'FAILED':
    return {
      ...state,
      error : message
    };
  default:
    return state;
  }
}
