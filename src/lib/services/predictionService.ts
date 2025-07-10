import { redisClient } from '../config/redis';
import prisma from '..//client';
import { calculateConfidenceScore } from '../utils/scoring';

export async function getPredictedItems(userId: string) {
  // Get all products
  const products = await prisma.product.findMany();
  // Generate predictions for 3 random products
  const shuffled = products.sort(() => 0.5 - Math.random());
  const predictions = shuffled.slice(0, 3).map(p => ({
    id: p.id,
    name: p.name,
    confidence: calculateConfidenceScore()
  })).filter(p => p.confidence >= 0.95);
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