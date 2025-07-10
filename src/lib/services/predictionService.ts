import { redisClient } from '../redis';
import prisma from '../prisma';
import { calculateConfidenceScore } from '../utils/scoring';

export async function getPredictedItems(userId: string) {
  // Get all products
  const products = await prisma.product.findMany();
  // Get user's ordered productIds
  const orders = await prisma.order.findMany({ where: { userId } });
  const orderedProductIds = new Set(orders.map(o => o.productId));
  // Recommend products not yet ordered
  const recommendations = products.filter(p => !orderedProductIds.has(p.id));
  // Generate predictions for up to 3 products
  const predictions = recommendations.slice(0, 3).map((p: any) => ({
    id: p.id,
    name: p.name,
    confidence: calculateConfidenceScore(userId, p.id)
  })).filter((p: any) => p.confidence >= 0.95);
  // Store in Redis and DB
  if (predictions.length) {
    await redisClient.set(`predictions:${userId}`, JSON.stringify(predictions));
    for (const pred of predictions) {
      await prisma.prediction.create({
        data: {
          userId,
          productId: pred.id,
          confidence: pred.confidence,
          status: 'queued',
        },
      });
    }
  }
  return predictions;
} 