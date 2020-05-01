import { LOGIN, CHANGE_PASSWORD, START_EXAM, UPD_EXAM_STATUS, END_EXAM, LOGOUT } from '../actions/types';

const initialState = {
	session: '',
	passwordChanged: false,
	examStarted: false,
	examEnded: false
};

const sessionReducer = (state, action) => {
	if(!state) {
		return initialState;
	}

	switch(action.type) {
		case LOGIN:
			return {
				...state,
				...action.data
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				...action.data
			};
		case START_EXAM:
			return {
				...state,
				...action.data
			};
		case UPD_EXAM_STATUS:
			let { examStarted, examEnded } = action.data;
			return {
				...state,
				examStarted,
				examEnded
			};
		case END_EXAM:
			return {
				...state,
				...action.data
			};
		case LOGOUT:
			return {
				session: '',
			};
		default:
			return state;
	}
}

export default sessionReducer;