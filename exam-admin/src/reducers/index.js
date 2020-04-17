import { combineReducers } from 'redux';

// Loader Reducer for FullPageReducer
import {loaderReducer as loader} from '../components/FullPageLoader'
import session from './sessionReducer';

export default combineReducers({
	loader,
	session
});