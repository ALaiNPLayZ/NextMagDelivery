import prisma from '../prisma';
import { anonymizeString } from '../utils/anonymizer';

export async function getAuditLogs() {
  return prisma.auditLog.findMany();
}

export async function getConsentStatus(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user?.consent;
}

export function testAnonymize(value: string) {
  return anonymizeString(value);
}

export async function simulateEncryptField(userId: string, value: string) {
  const encrypted = Buffer.from(value).toString('base64');
  await prisma.dataVault.create({ data: { userId, encryptedField: encrypted } });
  return encrypted;
} 