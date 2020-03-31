import { LOGIN, CHANGE_PASSWORD, START_EXAM, END_EXAM } from '../actions/types';

export const login = (data) => ({
	type: LOGIN,
	data
});

export const changePassword = (data) => ({
	type: CHANGE_PASSWORD,
	data
});

export const startExam = (data) => ({
	type: START_EXAM,
	data
});

export const endExam = (data) => ({
	type: END_EXAM,
	data
});