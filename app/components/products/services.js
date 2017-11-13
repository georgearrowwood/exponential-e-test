import servicesInstance from '../../modules/services';

export default (options) => {
  const instance = servicesInstance(options);
  return {
    getList: filter => instance.get('/api/products', { params: { ...filter } }),
    getFilters: () => instance.get('/api/products/filters'),
  };
};
