import React from 'react';
import { connect } from 'react-redux';
import { encryptRegistrationReq } from '../config/httpRoutes'; 
import { alertError, alertWarn } from '../config/toaster';
import { showLoader, hideLoader } from './FullPageLoader';

class EncReg extends React.Component {
	constructor(props) {
		super(props);

		if(!this.state.session) {
			this.props.history.push("/login");
		}

		this.state = {
			file: null,
			key: ''
		};
	}

	encReg = () => {
		let { file, key } = this.state;

		if(file.name.split(".")[1] !== "zip")
		{return alertWarn("Invalid File Type");}

		this.props.showLoader();

		let formData = new FormData();
		formData.append("zip", file);
		formData.append("key", key);

		encryptRegistrationReq(formData)
		.then( (res) => {
			const url = window.URL.createObjectURL(new Blob([res.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'exam.enc.zip'); // or any other extension
			document.body.appendChild(link);
			link.click();
			link.parentElement.removeChild(link);
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

export default connect(mapStateToProps, mapDispatchToProps)(EncReg);