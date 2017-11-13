import React from 'react';
import PropTypes from 'prop-types';

const ProductsListView = ({ products }) => (
  <div>
    <h2 className="sub-header">Products List</h2>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Supplier</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.supplier_name}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

ProductsListView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsListView.defaultProps = {
  products: [],
};

export default ProductsListView;
