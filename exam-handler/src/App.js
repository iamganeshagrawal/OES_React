import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './config/appRoutes';
import { Provider } from 'react-redux';
import store from './config/store';
// import Loader from './components/loader';
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
		{/* <ToastContainer />
			<Loader /> */}
    	<Router />
	</Provider>
  );
}

// // For UI testing
// import UI from './components/TestingComp'
// import { ToastContainer } from 'react-toastify'
// function App() {
// 	return (
// 		<>
// 		<ToastContainer />
// 		<UI qpDecrypted={true} />
// 		</>
// 	)
// }


export default App;
