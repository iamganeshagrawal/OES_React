import { createStore/*, applyMiddleware */ } from 'redux';
import rootReducer from '../reducers';
// import thunk from 'redux-thunk';

const persistedState = localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : {};

const store = createStore(rootReducer, persistedState/*, applyMiddleware(thunk) */, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
	localStorage.setItem('admin', JSON.stringify(store.getState()));
});

export default store;