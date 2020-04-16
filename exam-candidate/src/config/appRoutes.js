import React, { Component } from 'react';

import Login from '../components/firstLogin';
import Instructions from '../components/InstructionPage';
import Exam from '../components/Exam';
import ExamSubmitted from '../components/ExamSubmitted';

import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux';
import { createSocketConn, closeSocketConn } from './websocket';
import { removeToken } from './localStorage';
import { logout } from '../actions/sessionsActions';

class RouterComp extends Component {
	connectSocket = (tkn) => {
		if(!tkn) {
			return false;
		}
		this.ws = createSocketConn(tkn, () => {this.props.logout(); removeToken();});
		return true;
	}

	disconnectSocket = (code=1000, reason="Exam Submitted") => {
		closeSocketConn(this.ws, code, reason);
	}

	componentDidUpdate(prevProps) {
		if(prevProps.session && !this.props.session) {
			history.push("/login");
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<Router history={history}>
					<Switch>
						<Redirect exact from="/" to="/login" />
						
						<Route exact path="/login" render={(props) => <Login {...props} connect={this.connectSocket} />} />
						<Route exact path="/instructions" component={Instructions} />
						<Route exact path="/exam" render={(props) => <Exam {...props} disconnect={this.disconnectSocket} />} />
						<Route exact path="/examSubmitted" component={ExamSubmitted} />

						<Redirect from="*" to="/login" />
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => {dispatch(logout())}
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterComp);
