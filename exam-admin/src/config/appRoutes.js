import React, { Component } from 'react';

import Login from '../components/LoginPage';
import EncReg from '../components/EncryptRegPage';
import EncQP from '../components/EncryptQpPage';
import Centers from '../components/centers';
import CenterDash from '../components/centerDashboard';

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
					<Route exact path="/encReg" component={EncReg} />
					<Route exact path="/encQP" component={EncQP} />
					<Route exact path="/centers" component={Centers} />
					<Route exact path="/centerDash/:cc" component={CenterDash} />

				   	<Redirect from="*" to="/login" />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default appRouter;
