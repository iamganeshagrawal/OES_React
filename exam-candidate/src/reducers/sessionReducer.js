import { SAVE_IP, LOGIN, LOGOUT } from '../actions/types';

const initialState = {
	session: '',
	hallTicket: '',
	email: '',
	id: '',
	name: '',
	image: '',
	ip: ''
};

const sessionReducer = (state, action) => {
	if(!state) {
		return initialState;
	}

	switch(action.type) {
		case SAVE_IP:
			return {
				...state,
				...action.data
			};
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