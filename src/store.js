import { createStore, combineReducers } from "redux";
import questionReducer from './reducer/questionReducer'

const rootReducer = combineReducers({
    quiz: questionReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store