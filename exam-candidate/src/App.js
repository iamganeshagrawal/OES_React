import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
	<Provider store={store}>
		<ToastContainer />
    	<Router />
	</Provider>
  );
}

export default App;
