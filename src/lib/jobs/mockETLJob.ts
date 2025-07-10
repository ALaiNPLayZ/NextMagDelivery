import prisma from '../prisma';

export async function mockETLJob() {
  const events = await prisma.ingestedEvent.findMany({
    where: { createdAt: { gte: new Date(Date.now() - 60000) } },
  });
  for (const event of events) {
    // Example: If POS, update RFM for user; if App, update cluster, etc.
    if (event.type === 'POS' && event.payload.userId) {
      await prisma.feature.upsert({
        where: { userId: event.payload.userId },
        update: { rfm: (event.payload.amount || 0) },
        create: { userId: event.payload.userId, rfm: (event.payload.amount || 0) },
      });
    }
    // Add more logic for other event types as needed
  }
  console.log('[MockETLJob] Processed', events.length, 'ingested events');
} 