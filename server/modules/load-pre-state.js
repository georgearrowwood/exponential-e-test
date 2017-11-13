import productServices from '../../app/components/products/services';

const getProductsState = async (token, query) => {
  let products = [];
  let filters = {};
  const filter = {};
  if (token) {
    if (query.supplier_id) filter.supplier_id = parseInt(query.supplier_id, 10);
    if (query.type_id) filter.type_id = parseInt(query.type_id, 10);
    let response = await productServices({ token }).getList(filter);
    products = response.data && response.data.products ? response.data.products : [];
    response = await productServices({ token }).getFilters();
    filters = response.data && response.data.filters ? response.data.filters : {};
  }
  return {
    products: {
      items: products,
      filter,
      filters,
    },
  };
};

export default async (req, token) => {
  switch (req.path) {
    case '/products':
      return getProductsState(token, req.query);
    default:
      return {};
  }
};
