import { GETTING_LESSONS, GET_LESSONS } from '../actions/index';

const lessons = (state='', action) => {
  switch(action.type){
    case GETTING_LESSONS:
      return 'Getting lessons';
    case GET_LESSONS:
      return action.payload;
    default:
      return state;
  }
}

export default lessons;
