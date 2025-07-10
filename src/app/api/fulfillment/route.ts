import { NextRequest, NextResponse } from 'next/server';
import { simulateRFIDEvent } from '@/lib/services/fulfillmentService';

export async function POST(req: NextRequest) {
  const { productId, event } = await req.json();
  if (!productId || !event) return NextResponse.json({ error: 'productId and event required' }, { status: 400 });
  const result = await simulateRFIDEvent(productId, event);
  return NextResponse.json(result);
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 