import Cookies from 'js-cookie';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const login = data => {
  return dispatch => {
    Cookies.set('phonitoken', true);
    dispatch({
      type: LOGIN_SUCCESS
    });
  }
}

export const signup = data => {
  return dispatch => {
    dispatch({
      type: SIGNUP_SUCCESS
    });
  }
}

export const logout = () => {
  return dispatch => {
    Cookies.remove('phonitoken');
    dispatch({
      type: LOGOUT_SUCCESS
    });
  }
}
