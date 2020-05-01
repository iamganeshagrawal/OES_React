import { combineReducers } from 'redux';
import session from './sessionReducer';
import exam from './examReducer';
import {loaderReducer as loader} from '../components/FullPageLoader'

export default combineReducers({
	session,
	exam,
	loader
});