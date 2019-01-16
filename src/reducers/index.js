import { combineReducers } from 'redux';
import user from './user';
import languages from './languages';

export default combineReducers({ user, languages });
