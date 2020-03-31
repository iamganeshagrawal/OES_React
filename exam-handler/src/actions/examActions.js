import { DECRYPT_REGISTRATION, DECRYPT_EXAM, DISCARD_EXAM, 
			GET_DASHBOARD/*, GET_EXAMS_WITHOUT_RESPONSE_SHEET, GENERATE_RESPONSE_SHEET*/ } from '../actions/types';

export const decryptRegistration = (data) => ({
	type: DECRYPT_REGISTRATION,
	data
});

export const decryptExam = (data) => ({
	type: DECRYPT_EXAM,
	data
});

export const discardExam = (data) => ({
	type: DISCARD_EXAM,
	data
});

export const getDashboard = (data) => ({
	type: GET_DASHBOARD,
	data
});

// export const getExamsWithoutResponseSheet = (data) => ({
// 	type: GET_EXAMS_WITHOUT_RESPONSE_SHEET,
// 	data
// });

// export const generateResponseSheet = (data) => ({
// 	type: GENERATE_RESPONSE_SHEET,
// 	data
// });