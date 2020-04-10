import React from 'react';
import { connect } from 'react-redux';
import { getCentersReq } from '../config/httpRoutes'; 
import { alertError } from '../config/toaster';
import { showLoader, hideLoader } from './FullPageLoader';

class Centers extends React.Component {
	constructor(props) {
		super(props);

		if(!this.state.session) {
			this.props.history.push("/login");
		}

		this.state = {
			centers: []
		};
	}

	componentDidMount() {
		this.props.showLoader();
		getCentersReq(/*formData*/)
		.then( (res) => {
			this.setState({centers: res.data});
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

export default connect(mapStateToProps, mapDispatchToProps)(Centers);