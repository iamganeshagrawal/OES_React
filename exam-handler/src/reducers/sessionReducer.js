import { LOGIN } from '../actions/types';

const initialState = {
	session: '',
	hallTicketNumber: '',
	email: '',
	examCode: ''
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
		default:
			return state;
	}
}

export default sessionReducer;