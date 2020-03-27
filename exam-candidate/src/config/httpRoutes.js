// import axios from 'axios';
import axios from './interceptor';
import baseUrl from './urlConfig';

export const loginReq = (data) => {
	return axios.put(baseUrl+'login', data);
};

export const startExamReq = () => {
	return axios.get(baseUrl+'startExam');
};

export const answerQuestionReq = (data) => {
	return axios.post(baseUrl+'answer', data);
};

export const clearAnswerReq = (data) => {
	return axios.delete(baseUrl+'clearAnswer', data);
};

export const submitExamReq = (data) => {
	return axios.put(baseUrl+'submitExam', data);
};