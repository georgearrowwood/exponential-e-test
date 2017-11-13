import { reduxForm, Field } from 'redux-form';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, Button, Alert } from 'react-bootstrap/lib';

import { loginAction } from './actions';

class LoginFormView extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  showErrorMessage() {
    if (this.props.errorMessage) {
      return (
        <Alert bsStyle="danger">
          <p>
            {this.props.errorMessage}
          </p>
        </Alert>
      );
    }
    return '';
  }

  submit(values) {
    this.props.loginAction(values, this.props.history);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.showErrorMessage()}
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <FormGroup controlId="login">
            <ControlLabel>Login</ControlLabel>
            <Field
              name="login"
              component="input"
              type="text"
              placeholder="Login"
              className="form-control"
            />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password</ControlLabel>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </FormGroup>
          <Button type="submit">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  loginAction: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

LoginFormView.defaultProps = {
  errorMessage: null,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage || null };
}

const LoginForm = withRouter(connect(mapStateToProps, { loginAction })(LoginFormView));

export default reduxForm({
  form: 'login',
})(LoginForm);
