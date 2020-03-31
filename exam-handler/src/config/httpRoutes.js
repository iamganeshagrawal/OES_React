import axios from 'axios';
// import axios from './interceptor';
baseUrl = "http://localhost:8080/handling/";

export const loginReq = (data) => {
	return axios.put(baseUrl+'handleLogin', data);
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

export const decryptRegistrationReq = (data) => {
	return axios.post(baseUrl+'decryptRegistration', data);
};

export const decryptExamReq = (data) => {
	return axios.post(baseUrl+'decryptExam', data);
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
// 				alertError(err.response.message || "Unexpected Error has Occurred");
// 			} else {
// 				alertError("Server has Timed Out");
// 			}
// 		})
// 	}

// 	generateResponseSheet = (examCode) => {
// 		generateResponseSheetReq({examCode})
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
// 				alertError(err.response.message || "Unexpected Error has Occurred");
// 			} else {
// 				alertError("Server has Timed Out");
// 			}
// 		});
// 	}
// }

// export default connect(mapStateToProps)(GenResponseSheet);