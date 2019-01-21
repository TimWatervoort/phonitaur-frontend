import { combineReducers } from 'redux';
import user from './user';
import languages from './languages';
import lessons from './lessons';
import alphabet from './alphabet';
import auth from './auth';
import lesson from './lesson'

export default combineReducers({ user, languages, lessons, alphabet, auth, lesson });
