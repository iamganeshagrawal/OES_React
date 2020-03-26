import axios from 'axios';
// import axios from './interceptor';
import baseUrl from './urlConfig';

export const login = (data) => {
	return axios.put(baseUrl+'handleLogin', data);
};

export const changePassword = (data) => {
	return axios.put(baseUrl+'changePass', data);
};

export const startExam = (data) => {
	return axios.put(baseUrl+'startExam', data);
};

export const endExam = (data) => {
	return axios.put(baseUrl+'endExam', data);
};

export const decryptRegistration = (data) => {
	return axios.post(baseUrl+'decryptRegistration', data);
};

export const decryptExam = (data) => {
	return axios.post(baseUrl+'decryptExam', data);
};

export const discardExam = (data) => {
	return axios.put(baseUrl+'discardEx', data);
};

export const fetchDashboard = (data) => {
	return axios.get(baseUrl+'fetchDash', data);
};

export const getExamsWithoutResponseSheet = (data) => {
	return axios.get(baseUrl+'preGenResponse', data);
};

export const generateResponseSheet = (data) => {
	return axios.get(baseUrl+'genResponse', data);
};