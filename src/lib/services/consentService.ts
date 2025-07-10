import prisma from '../prisma';

export async function setUserConsent(userId: string, consent: boolean) {
  return prisma.user.update({ where: { id: userId }, data: { consent } });
}

export async function getUserConsent(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user?.consent;
} 