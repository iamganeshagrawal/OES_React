import { combineReducers } from 'redux';
import session from './sessionReducer';
import exam from './examReducer';

export default combineReducers({
	session,
	exam
});