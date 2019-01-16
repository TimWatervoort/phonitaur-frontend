import { combineReducers } from 'redux';
import user from './user';
import languages from './languages';
import lessons from './lessons';
import alphabet from './alphabet';

export default combineReducers({ user, languages, lessons, alphabet });
