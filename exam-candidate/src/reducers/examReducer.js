import { SAVE_EXAM, START_EXAM, CLEAR_ANSWER, ANSWER_QUESTION, SUBMIT_EXAM, MARK_FOR_REVIEW, LOGOUT } from '../actions/types';

const initialState = {
	questions: null,
	code: '',
	examTime: '',
	max: '',
	instructions: '',
	startTime: '',
	submitted: false
};

const examReducer = (state, action) => {
	if(!state) {
		return initialState;
	}

	switch(action.type) {
		case SAVE_EXAM:
			return {
				...state,
				...action.data
			};
		case START_EXAM:
			return {
				...state,
				...action.data
			};
		case ANSWER_QUESTION:
			return {
				...state,
				...action.data
			};
		case CLEAR_ANSWER:
			return {
				...state,
				...action.data
			};
		case MARK_FOR_REVIEW:
			return {
				...state,
				...action.data
			};
		case SUBMIT_EXAM:
			return {
				...state,
				...action.data
			};
		case LOGOUT:
			return {
				questions: null,
				code: '',
				examTime: '',
				max: '',
				instructions: '',
				startTime: '',
				submitted: false
			};
		default:
			return state;
	}
}

export default examReducer;