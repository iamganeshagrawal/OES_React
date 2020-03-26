import { START_EXAM, CLEAR_ANSWER, ANSWER_QUESTION, SUBMIT_EXAM } from '../actions/types';

const initialState = {
	questions: []
};

const examReducer = (state, action) => {
	if(!state) {
		return initialState;
	}

	switch(action.type) {
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
		case SUBMIT_EXAM:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
}

export default examReducer;