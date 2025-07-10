import { Server as SocketIOServer } from 'socket.io';
import vanSocketHandler from './vanSocket';

export function setupSocket(io: SocketIOServer) {
  vanSocketHandler(io);
} 