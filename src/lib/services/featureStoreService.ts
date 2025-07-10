import prisma from '../prisma';

export function getRFMScore(userId: string) {
  // Mock: return random RFM score
  return Math.floor(Math.random() * 100);
}

export function getCoPurchaseClusters(productId: string) {
  // Mock: return random cluster id
  return `cluster-${Math.floor(Math.random() * 5)}`;
}

export function getSeasonalityPatterns(productId: string) {
  // Mock: return random season
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
  return seasons[Math.floor(Math.random() * seasons.length)];
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
  const rfm = orders.length + (feedbacks.reduce((sum, f) => sum + f.rating, 0) / (feedbacks.length || 1));
  await prisma.feature.upsert({
    where: { userId },
    update: { rfm },
    create: { userId, rfm },
  });
} 