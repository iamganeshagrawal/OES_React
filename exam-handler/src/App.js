import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

import Comp from './components/QPAlreadyDecrypted';

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
