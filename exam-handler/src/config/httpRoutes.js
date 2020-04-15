import axios from 'axios';
// import axios from './interceptor';
const baseUrl = "http://localhost:8080/handling/";

export const loginReq = (data) => {
	return axios.put(baseUrl+'handleLogin', data);
};

export const logoutReq = (token) => {
	return axios.get(baseUrl+'handleLogout', {headers: {"x-handling-auth": token}});
};

export const refreshTokenReq = (token) => {
	return axios.get(baseUrl+'refreshToken', {headers: {"x-handling-auth": token}});
};

export const changePasswordReq = (data) => {
	return axios.put(baseUrl+'changePass', data);
};

export const startExamReq = (data) => {
	return axios.put(baseUrl+'startExam', data);
};

export const endExamReq = (data) => {
	return axios.put(baseUrl+'endExam', data);
};

export const decryptRegistrationReq = (formData) => {
	return axios.post(baseUrl+'decryptRegistration', formData);
};

export const decryptExamReq = (formData) => {
	return axios.post(baseUrl+'decryptExam', formData);
};

export const discardExamReq = (data) => {
	return axios.put(baseUrl+'discardEx', data);
};

export const fetchDashboardReq = (data) => {
	return axios.get(baseUrl+'fetchDash', data);
};

export const getExamsWithoutResponseSheetReq = () => {
	return axios.get(baseUrl+'preGenResponse');
};

export const generateResponseSheetReq = (data) => {
	return axios.get(baseUrl+'genResponse', data, {responseType: "blob"});
};
/**			Response Sheet Component		 */
// import React from 'react';
// import { connect } from 'react-redux';
// import { alertError, alertSuccess } from '../config/toaster';
// import { getExamsWithoutResponseSheetReq, generateResponseSheetReq } from '../config/httpRoutes';

// class GenResponseSheet extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			exams: []
// 		}
// 	}

// 	componentDidMount() {
// 		getExamsWithoutResponseSheetReq()
// 		.then( (res) => {
// 			this.setState({exams: res.data});
// 		}).catch( (err) => {
// 			if(err.response) {
// 				alertError(err.response.data.message || "Unexpected Error has Occurred");
// 			} else {
// 				alertError("Server has Timed Out");
// 			}
// 		})
// 	}

// 	generateResponseSheet = (examCode, examId) => {
// 		generateResponseSheetReq({examCode, examId})
// 		.then( (res) => {
// 			const url = window.URL.createObjectURL(new Blob([res.data]));
// 			const link = document.createElement('a');
// 			link.href = url;
// 			link.setAttribute('download', examCode+'_'+new Date().toDateString()+'.pdf'); // or any other extension
// 			document.body.appendChild(link);
// 			link.click();
// 			link.parentElement.removeChild(link);
// 		}).catch( (err) => {
// 			if(err.response) {
// 				alertError(err.response.data.message || "Unexpected Error has Occurred");
// 			} else {
// 				alertError("Server has Timed Out");
// 			}
// 		});
// 	}
// }

// export default connect(mapStateToProps)(GenResponseSheet);

/**			~Response Sheet Component		 */


/**			Logout Method		 */
// import { logoutReq } from '../config/httpRoutes';
// import { alertError, alertSuccess } from '../config/toaster';

// logout = () => {
// 	logoutReq(this.props.session)
// 	.then( (res) => {
// 		alertSuccess(res.data.message || "Logout Successful");
// 		this.props.history.push("/login");
// 	}).catch( (err) => {
// 		if(err.response) {
// 			alertError(err.response.data.message || "Unexpected Error has Occurred");
// 		} else {
// 			alertError("Server has Timed Out");
// 		}
// 	});
// }

// const mapStateToProps = (state) => ({
// 	session: state.session.session
// });
/**			~Logout	Method		 */