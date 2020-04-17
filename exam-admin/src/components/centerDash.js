import React from 'react';
import { connect } from 'react-redux';
import { centerDashboardReq } from '../config/httpRoutes'; 
import { alertError } from '../config/toaster';
import { showLoader, hideLoader } from './FullPageLoader';

class CenterDash extends React.Component {
	constructor(props) {
		super(props);

		if(!this.props.session) {
			this.props.history.push("/login");
		}

		if(!this.props.match.params.cc) {
			this.props.history.push("/centers");
		}

		this.state = {
			sessions: []
		};
	}

	componentDidMount() {
		this.props.showLoader();
		centerDashboardReq(this.props.match.params.cc)
		.then( (res) => {
			this.setState({sessions: res.data});
		}).catch( (err) => {
			if (err.response) {
				alertError(err.response.data.message || "Unexpected Error Has Occurred");
			} else {
				alertError("Server has Timed Out");
			}
		}).finally( () => {
			this.props.hideLoader();
		});
	}

	render() {
		return (
			<></>
		);
	}
}

const mapStateToProps = (state) => ({
	session: state.session.session
});

const mapDispatchToProps = (dispatch) => ({
	showLoader: () => {dispatch(showLoader());},
	hideLoader: () => {dispatch(hideLoader());}
});

export default connect(mapStateToProps, mapDispatchToProps)(CenterDash);