import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { logoutUser } from './actions';

class LogOut extends Component {
  componentWillMount() {
    this.props.logoutUser(this.props.history);
  }
  render() {
    return null;
  }
}

LogOut.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(connect(null, { logoutUser })(LogOut));
