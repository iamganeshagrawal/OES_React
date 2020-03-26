import axios from 'axios';
// import axios from './interceptor';
import baseUrl from './urlConfig';

export const login = (data) => {
	return axios.put(baseUrl+'login', data);
};

export const startExam = (data) => {
	return axios.get(baseUrl+'startExam', {params: data});
};

export const answerQuestion = (data) => {
	return axios.post(baseUrl+'answer', data);
};

export const clearAnswer = (data) => {
	return axios.delete(baseUrl+'clearAnswer', data);
};

export const submitExam = (data) => {
	return axios.put(baseUrl+'submitExam', data);
};