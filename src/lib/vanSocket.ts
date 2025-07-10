import { Server as SocketIOServer } from 'socket.io';
import prisma from './prisma';

function isVanCloseToUser(vanLoc: { lat: number; lng: number }, userLoc: { lat: number; lng: number }) {
  const dLat = vanLoc.lat - userLoc.lat;
  const dLng = vanLoc.lng - userLoc.lng;
  return Math.sqrt(dLat * dLat + dLng * dLng) < 0.002;
}

export default function vanSocketHandler(io: SocketIOServer) {
  setInterval(async () => {
    const vans = await prisma.van.findMany();
    const users = await prisma.user.findMany();
    io.emit('vanLocations', vans.map((v: any) => ({ id: v.id, location: { lat: v.locationLat, lng: v.locationLng } })));
    // Notify if van is close to any user
    for (const van of vans) {
      for (const user of users) {
        // TODO: Add real user location to User model and use here
        // Skipping vanClose notification for users without location
        continue;
      }
    }
  }, 3000);

  io.on('connection', async (socket) => {
    const vans = await prisma.van.findMany();
    socket.emit('vanLocations', vans.map((v: any) => ({ id: v.id, location: { lat: v.locationLat, lng: v.locationLng } })));
  });
} 