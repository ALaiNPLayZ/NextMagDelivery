import { NextRequest, NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    user: {
      id: 'u1',
      name: 'Alice',
      consent: true,
      recentOrders: [
        { product: 'Milk', status: 'delivered' },
        { product: 'Eggs', status: 'pending' },
      ],
      predictedItems: [
        { product: 'Bread', confidence: 0.97 },
      ],
    },
  });
}

export function POST() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 