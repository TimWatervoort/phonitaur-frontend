import { GETTING_ALPHABET, GET_ALPHABET } from '../actions/index';

const alphabet = (state='', action) => {
  switch(action.type){
    case GETTING_ALPHABET:
      return 'Getting alphabet';
    case GET_ALPHABET:
      return action.payload[0];
    default:
      return state;
  }
}

export default alphabet;
