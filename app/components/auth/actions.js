import cookie from 'react-cookies';
import services from './services';

export const loginAction = ({ login, password }, history) => async (dispatch) => {
  try {
    const res = await services().login({ login, password });
    cookie.save('user', res.data.user, { path: '/' });
    cookie.save('userToken', res.data.userToken, { path: '/' });
    dispatch({ type: 'AUTHENTICATED' });
    history.push('/products');
  } catch (error) {
    dispatch({
      type: 'AUTHENTICATION_ERROR',
      payload: 'Invalid email or password',
    });
  }
};

export const logoutUser = history => (dispatch) => {
  cookie.remove('user', { path: '/' });
  cookie.remove('userToken', { path: '/' });
  dispatch({
    type: 'UNAUTHENTICATED',
  });
  history.push('/');
};

