// import axios from 'axios';
import axios from './interceptor';
const baseUrl = "http://localhost:8081/";

export const loginReq = (data) => {
	return axios.put(baseUrl+'login', data);
};

export const encryptRegistrationReq = (formData) => {
	return axios.post(baseUrl+'uploadRegistration', formData, {responseType: 'blob'});
};

export const encryptExamReq = (formData) => {
	return axios.post(baseUrl+'uploadExam', formData, {responseType: 'blob'});
};

export const getCentersReq = () => {
	return axios.get(baseUrl+'centers');
};

export const centerDashboardReq = (centerCode) => {
	return axios.get(baseUrl+'centerDash/'+centerCode);
};

export const calcHashReq = (formData) => {
	return axios.put(baseUrl+'calculateHash', formData);
};
/**		Hashing		 */
	// let formData = new FormData();
	// formData.append("zip", file);

	// encryptRegistrationReq(formData)
	// .then( (res) => {
	// 	let { hash, message } = res.data;
	// 	this.setState({hash});
	// 	alertSuccess(message || "Hash Received Successfully");
	// }).catch( (err) => {
	// 	if (err.response) {
	// 		alertError(err.response.data.message || "Unexpected Error Has Occurred");
	// 	} else {
	// 		alertError("Server has Timed Out");
	// 	}
	// });
/**		~Hashing		 */