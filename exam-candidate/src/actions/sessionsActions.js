import { LOGIN, LOGOUT } from '../actions/types';

export const login = (data) => ({
	type: LOGIN,
	data
});

export const logout = () => ({
	type: LOGOUT
});