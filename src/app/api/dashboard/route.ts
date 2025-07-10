import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Example: get the first user and their recent orders and predictions
    const user = await prisma.user.findFirst({
      include: {
        orders: {
          take: 2,
          orderBy: { createdAt: 'desc' },
          include: { product: true },
        },
        predictions: {
          take: 1,
          orderBy: { createdAt: 'desc' },
          include: { product: true },
        },
      },
    });
    if (!user) return NextResponse.json({ error: 'No user found' }, { status: 404 });
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        consent: user.consent,
        recentOrders: user.orders.map(o => ({ product: o.product.name, status: o.status })),
        predictedItems: user.predictions.map(p => ({ product: p.product.name, confidence: p.confidence })),
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to load dashboard data' }, { status: 500 });
  }
}

export function POST() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 