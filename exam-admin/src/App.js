import React from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './components/FullPageLoader'
import Router from './config/appRoutes'

function App() {
  return (
    <Provider store={store}>
      <Loader isLoading={true} />
      <Router />
    </Provider>
  );
}

export default App;
