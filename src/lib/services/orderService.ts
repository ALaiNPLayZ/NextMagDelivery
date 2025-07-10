import prisma from '../prisma';

export async function confirmPredictedOrder(userId: string, productIds: string[]) {
  const orders = [];
  for (const productId of productIds) {
    const order = await prisma.order.create({
      data: {
        userId,
        productId,
        status: 'pending',
      },
    });
    orders.push(order);
    await prisma.prediction.updateMany({ where: { userId, productId, status: 'queued' }, data: { status: 'ordered' } });
  }
  return { success: true, message: 'Order confirmed', orders };
} 