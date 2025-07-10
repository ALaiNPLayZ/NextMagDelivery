import prisma from '../prisma';
export async function getInventory() {
  return prisma.product.findMany({ select: { id: true, name: true, inventory: true } });
}

export async function updateInventory(productId: string, amount: number) {
  return prisma.product.update({ where: { id: productId }, data: { inventory: { increment: amount } } });
}

export async function markPickedPacked(productId: string, status: string) {
  // Find the latest pending order for this product
  const order = await prisma.order.findFirst({ where: { productId, status: 'pending' }, orderBy: { createdAt: 'asc' } });
  if (order) {
    await prisma.order.update({ where: { id: order.id }, data: { status } });
    return { success: true, orderId: order.id, status };
  }
  return { success: false, message: 'No pending order found' };
}

export async function simulateRFIDEvent(productId: string, event: string) {
  // Example: If event is 'removed', decrement inventory
  if (event === 'removed') {
    await prisma.product.update({ where: { id: productId }, data: { inventory: { decrement: 1 } } });
  }
  return { success: true };
} 