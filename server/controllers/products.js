
const products = [
  {
    id: 1, name: 'Small wongle', type_id: 2, supplier_id: 1, supplier_name: 'New Co Ltd', price: 5,
  },
  {
    id: 2, name: 'Large wongle', type_id: 3, supplier_id: 1, supplier_name: 'New Co Ltd', price: 8,
  },
  {
    id: 3, name: 'Super wongle', type_id: 4, supplier_id: 1, supplier_name: 'New Co Ltd', price: 12,
  },
  {
    id: 4, name: 'Mini wongle', type_id: 1, supplier_id: 2, supplier_name: 'Old Co Ltd', price: 4,
  },
  {
    id: 5, name: 'Small wongle', type_id: 2, supplier_id: 2, supplier_name: 'Old Co Ltd', price: 6,
  },
  {
    id: 6, name: 'Large wongle', type_id: 3, supplier_id: 2, supplier_name: 'Old Co Ltd', price: 9,
  },
  {
    id: 7, name: 'Super wongle', type_id: 4, supplier_id: 2, supplier_name: 'Old Co Ltd', price: 13,
  },
];

const filters = {
  suppliers: [
    { id: 1, name: 'New Co Ltd' },
    { id: 2, name: 'Old Co Ltd' },
  ],
  types: [
    { id: 1, name: 'Mini wongle' },
    { id: 2, name: 'Small wongle' },
    { id: 3, name: 'Large wongle' },
    { id: 4, name: 'Super wongle' },
  ],
};

const productsController = {
  getList: (req, res) => {
    let responseProducts = products;
    // filtering
    if (req.query.supplier_id) {
      responseProducts = responseProducts
        .filter(item => item.supplier_id === parseInt(req.query.supplier_id, 10));
    }
    if (req.query.type_id) {
      responseProducts = responseProducts
        .filter(item => item.type_id === parseInt(req.query.type_id, 10));
    }
    res.send({ products: responseProducts });
  },
  getFilters: (req, res) => {
    res.send({ filters });
  },
};

export default productsController;
