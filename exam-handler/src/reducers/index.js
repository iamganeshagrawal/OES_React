import { combineReducers } from 'redux';
import session from './sessionReducer';
import exam from './examReducer';

// Loader Reducer for FullPageReducer
import {loaderReducer as loader} from '../components/FullPageLoader'


export default combineReducers({
	session,
	exam,
	loader
});