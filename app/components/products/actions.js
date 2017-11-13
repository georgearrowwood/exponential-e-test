import querystring from 'querystring';

import services from './services';

export const requestProducts = () => ({
  type: 'REQUEST_PRODUCTS',
});

export const receiveProducts = data => ({
  type: 'RECEIVE_PRODUCTS',
  products: data,
});

export const requestFilters = () => ({
  type: 'REQUEST_PRODUCTS_FILTERS',
});

export const receiveFilters = data => ({
  type: 'RECEIVE_PRODUCTS_FILTERS',
  filters: data,
});

export const setFilterValue = (name, value) => ({
  type: 'SET_PRODUCTS_FILTER',
  name,
  value,
});

export const fetchProducts = () => (dispatch, getState) => {
  const state = getState();
  dispatch(requestProducts());
  return services().getList(state.products.filter)
    .then(res => dispatch(receiveProducts(res.data.products)));
};

export const fetchProductsFilters = () => (dispatch) => {
  dispatch(requestFilters());
  return services().getFilters()
    .then(res => dispatch(receiveFilters(res.data.filters)));
};

export const setFilter = (name, value, history) => (dispatch, getState) => {
  dispatch(setFilterValue(name, value));
  const { filter } = getState().products;
  history.push(`/products?${querystring.stringify(filter)}`);
  return dispatch(fetchProducts());
};

