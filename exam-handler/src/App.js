import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Comp from './components/Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state = {}, action) => ({});
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
    	<Comp />
	</Provider>
  );
}

export default App;
