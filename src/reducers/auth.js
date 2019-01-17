import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, LOGOUT_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/auth';

const auth = (state='', action) => {
  switch(action.type){
    case LOGIN_FAILURE:
      return 'Login failure.';
    case LOGIN_SUCCESS:
      return 'Login success.';
    case LOGOUT_FAILURE:
      return 'Logout failure.';
    case LOGOUT_SUCCESS:
      return 'Logout success.';
    case SIGNUP_FAILURE:
      return 'Signup failure.';
    case SIGNUP_SUCCESS:
      return 'Signup success.';
    default:
      return state;
  }
}

export default auth;
