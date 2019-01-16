import { GETTING_LANGUAGES, GET_LANGUAGES } from '../actions/index';

const languages = (state='', action) => {
  switch(action.type) {
    case GETTING_LANGUAGES:
      return 'Getting languages.';
    case GET_LANGUAGES:
      return action.payload;
    default:
      return state;
  }
}

export default languages;
