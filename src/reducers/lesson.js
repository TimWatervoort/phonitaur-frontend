import { GETTING_LESSON, GET_LESSON } from '../actions/index';

const lesson = (state='', action) => {
  switch(action.type) {
    case GETTING_LESSON:
      return 'Getting lesson.';
    case GET_LESSON:
      return action.payload;
    default:
      return state;
  }
}

export default lesson;
