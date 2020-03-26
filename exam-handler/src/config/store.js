import { createStore/*, applyMiddleware */ } from 'redux';
import rootReducer from '../reducers';
// import thunk from 'redux-thunk';

const persistedState = localStorage.getItem('candid') ? JSON.parse(localStorage.getItem('candid')) : {};

const store = createStore(rootReducer, persistedState/*, applyMiddleware(thunk) */);
store.subscribe(() => {
	localStorage.setItem('candid', JSON.stringify(store.getState()));
});

export default store;