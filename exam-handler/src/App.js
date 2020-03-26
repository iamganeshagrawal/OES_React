import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
// import Loader from './components/loader';
// import { ToastContainer } from 'react-toastify';
import Comp from './components/u13';

function App() {
  return (
    <Provider store={store}>
		{/* <ToastContainer />
			<Loader /> */}
    	<Comp />
	</Provider>
  );
}

export default App;
