const initialState = {
	isLoading : false
};

const loaderReducer = (state, action) => {
	if(!state) {
		return initialState;
	}
	switch(action.type) {
		case "SHOW_LOADER":
			return {
                ...state,
				isLoading: true
			};
		case "HIDE_LOADER":
			return {
				...state,
				isLoading: false
			};
		default:
			return state;
	}
}

export default loaderReducer;