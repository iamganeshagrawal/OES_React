import { LOGIN, CHANGE_PASSWORD, START_EXAM, UPD_EXAM_STATUS, END_EXAM, LOGOUT } from '../actions/types';

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

export const updExamStatus = (data) => ({
	type: UPD_EXAM_STATUS,
	data
});

export const endExam = (data) => ({
	type: END_EXAM,
	data
});

export const logout = (data) => ({
	type: LOGOUT,
	data
});