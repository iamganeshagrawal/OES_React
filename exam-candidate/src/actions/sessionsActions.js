import { SAVE_IP, LOGIN, LOGOUT } from '../actions/types';

export const saveIP = (data) => ({
	type: SAVE_IP,
	data
});

export const login = (data) => ({
	type: LOGIN,
	data
});

export const logout = () => ({
	type: LOGOUT
});