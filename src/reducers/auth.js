import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/auth';

const auth = (state='', action) => {
  switch(action.type){
    case LOGIN_FAILURE:
      return 'Login failure.';
    case LOGIN_SUCCESS:
      return 'Login success.';
    default:
      return state;
  }
}

export default auth;
