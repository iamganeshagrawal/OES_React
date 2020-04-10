import { LOGIN } from "./types";

export const login = (data) => ({
	type: LOGIN,
	...data
});