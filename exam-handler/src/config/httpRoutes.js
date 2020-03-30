import axios from 'axios';
// import axios from './interceptor';
import baseUrl from './urlConfig';

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

export const getExamsWithoutResponseSheetReq = (data) => {
	return axios.get(baseUrl+'preGenResponse', data);
};

export const generateResponseSheetReq = (data) => {
	return axios.get(baseUrl+'genResponse', data);
};