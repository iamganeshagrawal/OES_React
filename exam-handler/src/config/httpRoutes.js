// import axios from 'axios';
import axios from './interceptor';
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

export const getCurrentExamStatusReq = () => {
	return axios.get(baseUrl+'getCurrentExamStatus');
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

export const getDuplicateSessionsReq = () => {
	return axios.get(baseUrl+'getDupeSessions');
};

export const mapSessionsReq = (data) => {
	return axios.post(baseUrl+'mapSession', data);
};