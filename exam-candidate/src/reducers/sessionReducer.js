import { LOGIN } from '../actions/types';

const initialState = {
	session: '',
	hallTicket: '',
	email: '',
	id: '',
	name: '',
	image: ''
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
		case LOGOUT:
			return {
				session: '',
				hallTicket: '',
				email: '',
				id: '',
				name: '',
				image: ''
			};
		default:
			return state;
	}
}

export default sessionReducer;