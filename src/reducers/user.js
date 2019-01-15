import { GETTING_USER, GET_USER } from '../actions/index';

const user = (state=[], action) => {
  switch (action.type) {
    case GETTING_USER:
      return 'Getting user';
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default user;
