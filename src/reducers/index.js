import { combineReducers } from 'redux';
import user from './user';
import languages from './languages';
import lessons from './lessons';
import alphabet from './alphabet';
import auth from './auth';
import questions from './questions'

export default combineReducers({ user, languages, lessons, alphabet, auth, questions });
