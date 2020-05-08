import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveIP } from '../actions/sessionsActions';
import { ping, setBase } from '../config/httpRoutes';
import { ipRE } from '../config/RegEx';
import { alertError, alertSuccess } from '../config/toaster';

class Ping extends Component {
	constructor(props) {
		super(props);
		
		if(this.props.ip) {
			this.props.history.push("/login");
		}

		this.state = {
			ip: ''
		};
	}

	componentDidUpdate(prevProps) {
		if(this.props.ip && !prevProps.ip) {
			this.props.history.push("/login");
		}
	}

	ipChange = ({ target }) => {
		this.setState({ip: target.value});
	}

	saveIP = (e) => {
		e.preventDefault();

		let { ip } = this.state;

		if(!ipRE.test(ip)) {
			return alertError("Please Enter a Valid IP");
		}
		setBase(ip);

		ping()
		.then( () => {
			this.props.saveIP({ip: ip});
			alertSuccess("Server IP Saved");
		}).catch( () => {
			alertError("Invalid Server IP")
		});
	}

	render() {
		return (
			<></>
		);
	}
}

const mapStateToProps = (state) => ({
	ip: state.session.ip
});

const mapDispatchToProps = (dispatch) => ({
	saveIP: (data) => {dispatch(saveIP(data));}
});

export default connect(mapStateToProps, mapDispatchToProps)(Ping);