import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Login from '../components/firstLogin';
import Instructions from '../components/InstructionPage';
import Exam from '../components/Exam';
import ExamSubmitted from '../components/ExamSubmitted';

import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';

class Router extends Component {
  render() {
    return (
		<div className="container-fluid">
			<Router history={history}>
			    <Switch>
					<Redirect exact from="/" to="/login" />
				   	
					<Route exact path="/login" component={Login} />
					<Route exact path="/instructions" component={Instructions} />
					<Route exact path="/exam" component={Exam} />
					<Route exact path="/examSubmitted" component={ExamSubmitted} />

				   	<Redirect from="*" to="/login" />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default Router;
