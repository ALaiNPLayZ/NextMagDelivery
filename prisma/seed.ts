import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { id: 'u1', email: 'alice@walmart.com', name: 'Alice', consent: true },
      { id: 'u2', email: 'bob@walmart.com', name: 'Bob', consent: false },
    ],
    skipDuplicates: true,
  });
  await prisma.product.createMany({
    data: [
      { id: 'p1', name: 'Milk', sku: 'SKU1', price: 2.99, inventory: 100 },
      { id: 'p2', name: 'Eggs', sku: 'SKU2', price: 1.99, inventory: 200 },
      { id: 'p3', name: 'Bread', sku: 'SKU3', price: 2.49, inventory: 150 },
    ],
    skipDuplicates: true,
  });
  await prisma.van.createMany({
    data: [
      { id: '1', zone: 'A', locationLat: 40.7128, locationLng: -74.006, inventory: { p1: 10, p2: 20 } },
      { id: '2', zone: 'B', locationLat: 40.7138, locationLng: -74.002, inventory: { p3: 15 } },
    ],
    skipDuplicates: true,
  });
  await prisma.ingestedEvent.createMany({
    data: [
      { id: 'e1', type: 'POS', payload: { amount: 20, items: ['Milk'] } },
      { id: 'e2', type: 'App', payload: { action: 'wishlist', product: 'Eggs' } },
      { id: 'e3', type: 'Loyalty', payload: { points: 100 } },
      { id: 'e4', type: 'External', payload: { weather: 'Rainy' } },
    ],
    skipDuplicates: true,
  });
  await prisma.feature.createMany({
    data: [
      { id: 'f1', userId: 'u1', rfm: 80, cluster: 'cluster-1', seasonality: 'Spring' },
      { id: 'f2', productId: 'p1', cluster: 'cluster-2', seasonality: 'Winter' },
    ],
    skipDuplicates: true,
  });
  await prisma.auditLog.createMany({
    data: [
      { id: 'a1', userId: 'u1', event: 'order', details: 'Order placed' },
      { id: 'a2', userId: 'u2', event: 'consent', details: 'Consent updated' },
    ],
    skipDuplicates: true,
  });
  await prisma.dataVault.createMany({
    data: [
      { id: 'd1', userId: 'u1', encryptedField: Buffer.from('SensitiveData').toString('base64') },
    ],
    skipDuplicates: true,
  });
}

main().then(() => prisma.$disconnect()); 