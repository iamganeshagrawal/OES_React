export const saveToken = (token) => {
	localStorage.setItem('x-auth', token);
}

export const getToken = () => {
	return localStorage.getItem('x-auth');
}

export const removeToken = () => {
	localStorage.removeItem('x-auth');
}