import Cookies from 'js-cookie';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const apiUrl = 'http://localhost:8000';

export const login = data => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/api/token/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    if (response.status !== 200) {
      dispatch({
        type: LOGIN_FAILURE
      });
    } else {
      const json = await response.json();
      Cookies.set('phonitoken', json.access);
      dispatch({
        type: LOGIN_SUCCESS
      });
    }
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
