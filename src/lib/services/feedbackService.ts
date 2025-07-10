import prisma from '../prisma';
import { recalculateUserFeatures } from './featureStoreService';

export async function storeFeedback(userId: string, orderId: string, rating: number, comment?: string) {
  const feedback = await prisma.feedback.create({ data: { userId, orderId, rating, comment } });
  await recalculateUserFeatures(userId);
  return feedback;
}

export async function getAllFeedback() {
  return prisma.feedback.findMany();
} 