import axios from 'axios';
import store from './store';
import { refreshTokenReq, logoutReq } from '../config/httpRoutes';
import { removeToken, saveToken } from './localStorage';
import { logout } from '../actions/sessionsActions';


var axiosInstance = axios.create();
axiosInstance.defaults.timeout = 30000;

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(token) {
  subscribers = subscribers.filter(callback => callback(token));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}



axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('x-auth');

  if(token) {
    config.headers['x-handling-auth'] = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  const { config, response: { status, data } } = error;
  const originalRequest = config;
	console.log(status, data, config.headers);
  if (status === 401 && config.headers['x-handling-auth']) {
	let token = config.headers['x-handling-auth'];
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      refreshTokenReq(token).then((res) => {
		isAlreadyFetchingAccessToken = false;
		console.log(res.headers);
		saveToken(res.headers.authhand);
        onAccessTokenFetched(res.headers.authhand);
      }).catch( async (err) => {
		await logoutReq(token);
		store.dispatch(logout());
		removeToken();
        return Promise.reject(err);
      }).catch( (err) => {
		return Promise.reject(err);
	  });
    }

    const retryOriginalRequest = new Promise((resolve, reject) => {
      addSubscriber(token => {
        originalRequest.headers.authorization = token;
        resolve(axios(originalRequest));
      });
    });

    return retryOriginalRequest;
  } else {
    return Promise.reject(error);
  }
});

export default axiosInstance;
