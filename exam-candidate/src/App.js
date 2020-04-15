import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
// import Loader from './components/loader';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
	<Provider store={store}>
		<ToastContainer />
		{/* <Loader /> */}
    	<Router />
	</Provider>
  );
}

export default App;
