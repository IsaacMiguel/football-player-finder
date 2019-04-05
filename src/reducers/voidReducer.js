// reducer vacio, simplemente para implementar
export const voidReducer = (state = {}, action) => {
  switch(action.type) {
    case 'NOTHING': {
      return {...state, isFetching: action.payload.something };
    }

    default:
      return {...state};
  }
};