import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
import { ToastContainer } from 'react-toastify';
import Loader from './components/FullPageLoader';

function App() {
  return (
	<Provider store={store}>
		<Loader isLoading={true} />
		<ToastContainer />
    	<Router />
	</Provider>
  );
}

export default App;
