import { GETTING_QUESTIONS, GET_QUESTIONS } from '../actions/index';

const questions = (state=[], action) => {
  switch (action.type) {
    case GETTING_QUESTIONS:
      return 'Getting questions';
    case GET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}

export default questions;
