// import { baseUrl } from '../config/httpRoutes';
// const baseURL = baseUrl.replace("http", "ws");

// export const createSocketConn = (token, closeCB) => {
// 	let ws = new WebSocket(baseURL+"ws", token);
// 	ws.onclose = closeCB;
// 	// ws.onerror = closeCB;
// 	return ws;
// }

// export const closeSocketConn = (ws, code, reason) => {
// 	ws.close(code, reason);
// }