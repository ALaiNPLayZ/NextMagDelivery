export function anonymizeString(str: string) {
  return Buffer.from(str).toString('base64');
} 