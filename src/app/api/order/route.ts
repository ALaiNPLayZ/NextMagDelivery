import { NextRequest, NextResponse } from 'next/server';
import { confirmPredictedOrder } from '@/lib/services/orderService';

export async function POST(req: NextRequest) {
  const { userId, productIds } = await req.json();
  if (!userId || !productIds) return NextResponse.json({ error: 'userId and productIds required' }, { status: 400 });
  const result = await confirmPredictedOrder(userId, productIds);
  return NextResponse.json(result);
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 