import prisma from '../prisma';

export async function ingestPOS(payload: any) {
  return prisma.ingestedEvent.create({ data: { type: 'POS', payload } });
}
export async function ingestApp(payload: any) {
  return prisma.ingestedEvent.create({ data: { type: 'App', payload } });
}
export async function ingestLoyalty(payload: any) {
  return prisma.ingestedEvent.create({ data: { type: 'Loyalty', payload } });
}
export async function ingestExternal(payload: any) {
  return prisma.ingestedEvent.create({ data: { type: 'External', payload } });
} 