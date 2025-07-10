import prisma from '../prisma';

export async function getRFMScore(userId: string) {
  const feature = await prisma.feature.findFirst({ where: { userId } });
  return feature?.rfm ?? null;
}

export async function getCoPurchaseClusters(productId: string) {
  const feature = await prisma.feature.findFirst({ where: { productId } });
  return feature?.cluster ?? null;
}

export async function getSeasonalityPatterns(productId: string) {
  const feature = await prisma.feature.findFirst({ where: { productId } });
  return feature?.seasonality ?? null;
}

export async function getUserFeature(userId: string) {
  return prisma.feature.findFirst({ where: { userId } });
}

export async function getProductFeature(productId: string) {
  return prisma.feature.findFirst({ where: { productId } });
}

export async function recalculateUserFeatures(userId: string) {
  // Example: recalculate RFM as count of orders + avg feedback rating
  const orders = await prisma.order.findMany({ where: { userId } });
  const feedbacks = await prisma.feedback.findMany({ where: { userId } });
  const rfm = orders.length + (feedbacks.reduce((sum: number, f: any) => sum + f.rating, 0) / (feedbacks.length || 1));
  await prisma.feature.upsert({
    where: { userId },
    update: { rfm },
    create: { userId, rfm },
  });
} 