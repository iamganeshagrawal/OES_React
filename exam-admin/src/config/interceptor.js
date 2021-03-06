import axios from 'axios';
// import store from './store';
// import { refreshToken, logout } from '../actions/sessionActions';
import { getToken } from './localStorage';


var axiosInstance = axios.create();
axiosInstance.defaults.timeout = 30000;

// let isAlreadyFetchingAccessToken = false;
// let subscribers = [];

// function onAccessTokenFetched(token) {
//   subscribers = subscribers.filter(callback => callback(token));
// }

// function addSubscriber(callback) {
//   subscribers.push(callback);
// }



axiosInstance.interceptors.request.use(function (config) {
  const token = getToken();

  if(token) {
    config.headers.admauthin = token;
  }
  return config;
});

// axiosInstance.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   const { config, response: { status } } = error;
//   const originalRequest = config;

//   if (status === 401 && config.headers.authorization) {
//     if (!isAlreadyFetchingAccessToken) {
//       isAlreadyFetchingAccessToken = true;
//       store.dispatch(refreshToken()).then((token) => {
//         isAlreadyFetchingAccessToken = false;
//         onAccessTokenFetched(token);
//       }).catch( (err) => {
//         store.dispatch(logout(err.userid));
//         return Promise.reject(err.err);
//       });
//     }

//     const retryOriginalRequest = new Promise((resolve, reject) => {
//       addSubscriber(token => {
//         originalRequest.headers.authorization = token;
//         resolve(axios(originalRequest));
//       });
//     });

//     return retryOriginalRequest;
//   } else {
//     return Promise.reject(error);
//   }
// });

export default axiosInstance;
