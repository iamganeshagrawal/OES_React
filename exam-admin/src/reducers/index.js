import { combineReducers } from 'redux';

// Loader Reducer for FullPageReducer
import {loaderReducer as loader} from '../components/FullPageLoader'

export default combineReducers({
	loader
});