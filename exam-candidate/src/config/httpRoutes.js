// import axios from 'axios';
import axios from './interceptor';
export const baseUrl = "http://localhost:8080/";

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
	return axios.delete(baseUrl+'clearAnswer', {data});
};

export const submitExamReq = () => {
	return axios.put(baseUrl+'submitExam');
};