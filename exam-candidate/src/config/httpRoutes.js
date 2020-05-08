// import axios from 'axios';
import axios from './interceptor';
let baseUrl = "http://localhost:8080/";

export const setBase = (ip) => {
	baseUrl = baseUrl.replace("localhost", ip);
};

export const ping = () => {
	return axios.get(baseUrl+'ping');
}

export const loginReq = (data) => {
	return axios.put(baseUrl+'login', data);
};

export const startExamReq = () => {
	return axios.get(baseUrl+'startExam');
};

export const updTmReq = () => {
	return axios.get(baseUrl+'updTm');
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