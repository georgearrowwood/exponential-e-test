import React from 'react';

import PropTypes from 'prop-types';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib';

const ProductSearchForm = ({ filter, filters, handleChange }) => (
  <div>
    <h1 className="page-header">Search Products</h1>
    <form>
      <Row>
        <Col className="form-group" md={6}>
          <FormGroup controlId="supplierSelect">
            <ControlLabel>Supplier</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={handleChange}
              name="supplier_id"
              value={filter.supplier_id ? filter.supplier_id : ''}
            >
              <option value="">select</option>
              { filters.suppliers.map(supplier => (
                <option value={supplier.id} key={supplier.id}>{supplier.name}</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
        <Col className="form-group" md={6}>
          <FormGroup controlId="typeSelect">
            <ControlLabel>Product</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={handleChange}
              name="type_id"
              value={filter.type_id ? filter.type_id : ''}
            >
              <option value="">select</option>
              { filters.types.map(product => (
                <option value={product.id} key={product.id}>{product.name}</option>
              ))}
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
    </form>
  </div>
);

ProductSearchForm.propTypes = {
  filters: PropTypes.shape({
    suppliers: PropTypes.arrayOf(PropTypes.object),
    types: PropTypes.arrayOf(PropTypes.object),
  }),
  filter: PropTypes.shape({
    supplier_id: PropTypes.number,
    type_id: PropTypes.number,
  }),
  handleChange: PropTypes.func.isRequired,
};

ProductSearchForm.defaultProps = {
  filters: {
    suppliers: [],
    types: [],
  },
  filter: {},
};

export default ProductSearchForm;
