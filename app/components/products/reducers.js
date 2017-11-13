const setProductFilter = (state, action) => {
  const filter = { ...state.filter };
  filter[action.name] = action.value ? parseInt(action.value, 10) : null;
  return {
    ...state,
    filter,
  };
};

function products(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
      return {
        ...state,
      };
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        items: action.products,
      };
    case 'REQUEST_PRODUCTS_FILTERS':
      return {
        ...state,
      };
    case 'RECEIVE_PRODUCTS_FILTERS':
      return {
        ...state,
        filters: action.filters,
      };
    case 'SET_PRODUCTS_FILTER':
      return setProductFilter(state, action);
    default:
      return state;
  }
}

export default products;
