import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { GET_USER } from './index';

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
      const decoded = jwt.decode(json.access)
      const response2 = await fetch(`${apiUrl}/users/${decoded.user_id}`);
      const json2 = await response2.json();
      dispatch({
        type: GET_USER,
        payload: json2
      });
    }
  }
}

export const signup = data => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/users/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    if (response.status !== 201) {
      dispatch({
        type: SIGNUP_FAILURE
      });
    } else {
      const json = await response.json();
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: json
      });
    }
  }
}

export const logout = () => {
  return dispatch => {
    try {
      Cookies.remove('phonitoken')
      dispatch({
        type: LOGOUT_SUCCESS
      });
    } catch {
      dispatch({
        type: LOGOUT_FAILURE
      });
    }
  }
}
