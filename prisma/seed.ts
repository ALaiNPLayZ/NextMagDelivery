const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Users
  await prisma.user.createMany({
    data: [
      { id: 'u1', email: 'alice@walmart.com', name: 'Alice', consent: true },
      { id: 'u2', email: 'bob@walmart.com', name: 'Bob', consent: false },
      { id: 'u3', email: 'carol@walmart.com', name: 'Carol', consent: true },
    ],
    skipDuplicates: true,
  });
  // Products
  await prisma.product.createMany({
    data: [
      { id: 'p1', name: 'Milk', sku: 'SKU1', price: 2.99, inventory: 100 },
      { id: 'p2', name: 'Eggs', sku: 'SKU2', price: 1.99, inventory: 200 },
      { id: 'p3', name: 'Bread', sku: 'SKU3', price: 2.49, inventory: 150 },
      { id: 'p4', name: 'Butter', sku: 'SKU4', price: 3.49, inventory: 80 },
      { id: 'p5', name: 'Cheese', sku: 'SKU5', price: 4.99, inventory: 60 },
    ],
    skipDuplicates: true,
  });
  // Vans
  await prisma.van.createMany({
    data: [
      { id: 'v1', zone: 'A', locationLat: 40.7128, locationLng: -74.006, inventory: { p1: 10, p2: 20, p3: 5 } },
      { id: 'v2', zone: 'B', locationLat: 40.7138, locationLng: -74.002, inventory: { p4: 15, p5: 10 } },
    ],
    skipDuplicates: true,
  });
  // Orders
  await prisma.order.createMany({
    data: [
      { id: 'o1', userId: 'u1', productId: 'p1', vanId: 'v1', status: 'delivered' },
      { id: 'o2', userId: 'u1', productId: 'p2', vanId: 'v1', status: 'pending' },
      { id: 'o3', userId: 'u2', productId: 'p3', vanId: 'v2', status: 'picked' },
      { id: 'o4', userId: 'u3', productId: 'p4', vanId: 'v2', status: 'delivered' },
      { id: 'o5', userId: 'u3', productId: 'p5', vanId: 'v2', status: 'pending' },
    ],
    skipDuplicates: true,
  });
  // Predictions
  await prisma.prediction.createMany({
    data: [
      { id: 'pr1', userId: 'u1', productId: 'p3', confidence: 0.97, status: 'queued' },
      { id: 'pr2', userId: 'u2', productId: 'p2', confidence: 0.95, status: 'queued' },
      { id: 'pr3', userId: 'u3', productId: 'p1', confidence: 0.99, status: 'ordered' },
    ],
    skipDuplicates: true,
  });
  // Feedback
  await prisma.feedback.createMany({
    data: [
      { id: 'fb1', userId: 'u1', orderId: 'o1', rating: 5, comment: 'Great delivery!' },
      { id: 'fb2', userId: 'u2', orderId: 'o3', rating: 4, comment: 'Good, but late.' },
      { id: 'fb3', userId: 'u3', orderId: 'o4', rating: 5, comment: 'Perfect!' },
    ],
    skipDuplicates: true,
  });
  // Ingested Events
  await prisma.ingestedEvent.createMany({
    data: [
      { id: 'e1', type: 'POS', payload: { amount: 20, items: ['Milk', 'Eggs'] } },
      { id: 'e2', type: 'App', payload: { action: 'wishlist', product: 'Bread' } },
      { id: 'e3', type: 'Loyalty', payload: { points: 100 } },
      { id: 'e4', type: 'External', payload: { weather: 'Rainy' } },
    ],
    skipDuplicates: true,
  });
  // Features
  await prisma.feature.createMany({
    data: [
      { id: 'f1', userId: 'u1', rfm: 80, cluster: 'cluster-1', seasonality: 'Spring' },
      { id: 'f2', productId: 'p1', cluster: 'cluster-2', seasonality: 'Winter' },
      { id: 'f3', userId: 'u2', rfm: 60, cluster: 'cluster-3', seasonality: 'Summer' },
      { id: 'f4', productId: 'p2', cluster: 'cluster-1', seasonality: 'Spring' },
      { id: 'f5', userId: 'u3', rfm: 90, cluster: 'cluster-2', seasonality: 'Fall' },
    ],
    skipDuplicates: true,
  });
  // Audit Logs
  await prisma.auditLog.createMany({
    data: [
      { id: 'a1', userId: 'u1', event: 'order', details: 'Order placed' },
      { id: 'a2', userId: 'u2', event: 'consent', details: 'Consent updated' },
      { id: 'a3', userId: 'u3', event: 'feedback', details: 'Feedback submitted' },
    ],
    skipDuplicates: true,
  });
  // Data Vault
  await prisma.dataVault.createMany({
    data: [
      { id: 'd1', userId: 'u1', encryptedField: Buffer.from('SensitiveData1').toString('base64') },
      { id: 'd2', userId: 'u2', encryptedField: Buffer.from('SensitiveData2').toString('base64') },
      { id: 'd3', userId: 'u3', encryptedField: Buffer.from('SensitiveData3').toString('base64') },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 