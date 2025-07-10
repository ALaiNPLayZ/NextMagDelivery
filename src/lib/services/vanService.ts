import prisma from '../prisma';

export async function getVanInfo(id: string) {
  return prisma.van.findUnique({ where: { id } });
}

export async function getAllVans() {
  return prisma.van.findMany();
}

export async function assignVan(userId: string, orderId: string, vanId: string) {
  // Assign van to order
  return prisma.order.update({ where: { id: orderId }, data: { vanId } });
}

export async function updateVanInventory(vanId: string, inventory: any) {
  return prisma.van.update({ where: { id: vanId }, data: { inventory } });
}

export async function simulateRouteChange(vanId: string, newRoute: any) {
  // For now, just log the new route; in real system, update van's location
  return prisma.van.update({ where: { id: vanId }, data: { locationLat: newRoute.lat, locationLng: newRoute.lng } });
} 