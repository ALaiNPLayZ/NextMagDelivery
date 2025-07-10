import prisma from '../prisma';

export async function inventorySyncJob() {
  // Simulate inventory sync: increment all product inventory by 10
  const products = await prisma.product.findMany();
  for (const product of products) {
    await prisma.product.update({
      where: { id: product.id },
      data: { inventory: product.inventory + 10 },
    });
  }
  console.log('[InventorySyncJob] Inventory incremented for all products');
} 