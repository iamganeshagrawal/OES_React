import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
import { ToastContainer } from 'react-toastify';
import Loader from './components/FullPageLoader';
import history from './config/history';

function App() {
	window.addEventListener("popstate", () => {
		history.go(1);
	});
	// Back Button

	window.onbeforeunload = function() {
		return false;
	}
	// Refresh

	document.onkeydown = function(event) {
		console.log("Key Code", event.keyCode);
		console.log("Alt Key", event.altKey);
		switch (event.keyCode){
			// case 16 : //Shift Key
			// 	event.returnValue = false;
			// 	// event.keyCode = 0;
			// 	return false;
			// case 17 : //Ctrl Key
			// 	event.returnValue = false;
			// 	// event.keyCode = 0;
			// 	return false;
			// case 18 : //Alt button
			// 	event.returnValue = false;
			// 	// event.keyCode = 0;
			// 	return false;
			case 116 : //F5 button
				event.returnValue = false;
				// event.keyCode = 0;
				return false;
			case 122 : //F11 button
				event.returnValue = false;
				// event.keyCode = 0;
				return false;
			case 82 : //R button
				if (event.ctrlKey || event.ctrlLeft) { 
					event.returnValue = false;
					// event.keyCode = 0;
					return false;
				}
			// case 9 : //Tab button
			// 	if (event.altKey || event.altLeft) { 
			// 		event.returnValue = false;
			// 		// event.keyCode = 0;
			// 		return false;
			// 	}
		}
	}
	// Block F5 and Ctrl+R

	return (
		<Provider store={store}>
			<Loader isLoading={true} />
			<ToastContainer />
			<Router />
		</Provider>
	);
}

export default App;
