import { DECRYPT_REGISTRATION, DECRYPT_EXAM, DISCARD_EXAM, 
	GET_DASHBOARD/*, GET_EXAMS_WITHOUT_RESPONSE_SHEET, GENERATE_RESPONSE_SHEET*/ } from '../actions/types';

const initialState = {
	examCode: '',
	qpDecrypted: false,
	regDataDecrypted: false
};

const examReducer = (state, action) => {
	if(!state) {
		return initialState;
	}

	switch(action.type) {
		case DECRYPT_REGISTRATION:
			return {
				...state,
				...action.data
			};
		case DECRYPT_EXAM:
			return {
				...state,
				...action.data
			};
		case DISCARD_EXAM:
			return {
				...state,
				...action.data
			};
		case GET_DASHBOARD:
			return {
				...state,
				...action.data
			};
		// case GET_EXAMS_WITHOUT_RESPONSE_SHEET:
		// 	return {
		// 		...state,
		// 		...action.data
		// 	};
		// case GENERATE_RESPONSE_SHEET:
		// 	return {
		// 		...state,
		// 		...action.data
		// 	};
		default:
			return state;
	}
}

export default examReducer;