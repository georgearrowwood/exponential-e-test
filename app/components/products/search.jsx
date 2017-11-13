import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import ProductsSearchView from './search-view';
import { fetchProductsFilters, setFilter } from './actions';

class ProductsSearch extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchProductsFilters());
  }

  handleChange(e) {
    this.props.dispatch(setFilter(e.target.name, e.target.value, this.props.history));
  }

  render() {
    return (<ProductsSearchView
      filters={this.props.filters}
      filter={this.props.filter}
      handleChange={this.handleChange}
    />);
  }
}

ProductsSearch.propTypes = {
  filters: PropTypes.shape({
    suppliers: PropTypes.arrayOf(PropTypes.object),
    types: PropTypes.arrayOf(PropTypes.object),
  }),
  filter: PropTypes.shape({
    supplier_id: PropTypes.number,
    type_id: PropTypes.number,
  }),
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

ProductsSearch.defaultProps = {
  filters: {
    suppliers: [],
    types: [],
  },
  filter: {},
};

const mapStateToProps = state => ({
  filters: state.products.filters,
  filter: state.products.filter,
});

export default withRouter(connect(mapStateToProps)(ProductsSearch));
