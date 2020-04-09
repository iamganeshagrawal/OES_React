import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './components/FullPageLoader'
import Page from './components/LoginPage'

function App() {
  return (
    <Provider store={store}>
      <Page />
      <Loader isLoading={true} />
    </Provider>
  );
}

export default App;
