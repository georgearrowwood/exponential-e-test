import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductsListView from './list-view';
import { fetchProducts } from './actions';

class ProductsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (<ProductsListView
      products={this.props.products}
    />);
  }
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

ProductsList.defaultProps = {
  products: [],
};

const mapStateToProps = state => ({
  products: state.products.items,
});

export default connect(mapStateToProps)(ProductsList);
