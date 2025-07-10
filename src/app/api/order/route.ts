import { NextRequest, NextResponse } from 'next/server';
import { confirmPredictedOrder } from '@/lib/services/orderService';

export async function POST(req: NextRequest) {
  try {
    const { userId, productIds } = await req.json();
    if (!userId || !productIds) return NextResponse.json({ error: 'userId and productIds required' }, { status: 400 });
    const result = await confirmPredictedOrder(userId, productIds);
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to confirm order' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 