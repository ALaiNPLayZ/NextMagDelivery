import prisma from '../prisma';
import { recalculateUserFeatures } from '../services/featureStoreService';

export async function feedbackTriggerJob() {
  // Recalculate RFM for all users who submitted feedback
  const feedbacks = await prisma.feedback.findMany({ distinct: ['userId'] });
  for (const fb of feedbacks) {
    await recalculateUserFeatures(fb.userId);
  }
  console.log('[FeedbackTriggerJob] RFM recalculated for users with feedback');
} 