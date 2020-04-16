import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
import { ToastContainer } from 'react-toastify';

import UI from "./components/firstLogin"

function App() {
  return (
	<Provider store={store}>
		<ToastContainer />
    	{/* <Router /> */}
		<UI />
	</Provider>
  );
}

export default App;
