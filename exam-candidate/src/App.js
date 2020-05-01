import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
import { ToastContainer } from 'react-toastify';

function App() {
	window.addEventListener("popstate", () => {
		history.go(1);
	});
	// Back Button

	window.onbeforeunload = function() {
		return false;
	}
	// Refresh

	document.onkeydown = function() {
		switch (event.keyCode){
			case 116 : //F5 button
				event.returnValue = false;
				event.keyCode = 0;
				return false;
			case 82 : //R button
				if (event.ctrlKey) { 
				event.returnValue = false;
				event.keyCode = 0;
				return false;
				}
		}
	}
	// Block F5 and Ctrl+R

	return (
		<Provider store={store}>
			<ToastContainer />
			<Router />
		</Provider>
	);
}

export default App;
