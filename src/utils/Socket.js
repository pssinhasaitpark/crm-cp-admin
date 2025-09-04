// src/utils/socket.js
import { io } from "socket.io-client";

const SOCKET_URL = "http://192.168.0.14:8000/"; // backend ka URL daalo
export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  reconnection: true,
});
