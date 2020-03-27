import React, { Component } from 'react';

import Login from '../components/Login';
import DecRegData from '../components/DecRegistrationData';
import UploadQP from '../components/UploadQP';
import UploadQP2 from '../components/UploadQP2';
import DecryptQP from '../components/DecryptQP';
import QPAlreadyDecrypted from '../components/QPAlreadyDecrypted';
import BioDash from '../components/BiometricDashboard';
import Dash from '../components/Dashboard';
import QPStarted from '../components/QPStarted';

import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';

class appRouter extends Component {
  render() {
    return (
		<div className="container-fluid">
			<Router history={history}>
			    <Switch>
					<Redirect exact from="/" to="/login" />
		
					<Route exact path="/login" component={Login} />
					<Route exact path="/decReg" component={DecRegData} />
					<Route exact path="/uploadQP" component={UploadQP} />
					<Route exact path="/uploadQP2" component={UploadQP2} />
					<Route exact path="/decryptQP" component={DecryptQP} />
					<Route exact path="/qpAlrdy" component={QPAlreadyDecrypted} />
					<Route exact path="/bioDash" component={BioDash} />
					<Route exact path="/dash" component={Dash} />
					<Route exact path="/qpStarted" component={QPStarted} />

				   	<Redirect from="*" to="/login" />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default appRouter;
