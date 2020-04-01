import { baseUrl } from '../config/httpRoutes';
baseUrl.replace("http", "ws");

export const createSocketConn = (token, closeCB) => {
	let ws = new WebSocket(baseUrl+"ws", token);
	ws.onclose = closeCB;
	ws.onerror = closeCB;
	return ws;
}

export const closeSocketConn = (ws, code, reason) => {
	ws.close(code, reason);
}