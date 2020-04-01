import { LOGIN, LOGOUT } from '../actions/types';

export const login = (data) => ({
	type: LOGIN,
	data
});

export const logout = (data) => ({
	type: LOGOUT,
	data
});