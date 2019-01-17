import Cookies from 'js-cookie';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = data => {
  return dispatch => {
    Cookies.set('phonitoken', true);
    dispatch({
      type: LOGIN_SUCCESS
    });
  }
}
