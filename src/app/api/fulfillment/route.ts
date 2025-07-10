import { NextRequest, NextResponse } from 'next/server';
import { simulateRFIDEvent, getInventory } from '@/lib/services/fulfillmentService';

export async function POST(req: NextRequest) {
  try {
    const { productId, event } = await req.json();
    if (!productId || !event) return NextResponse.json({ error: 'productId and event required' }, { status: 400 });
    const result = await simulateRFIDEvent(productId, event);
    return NextResponse.json(result);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to process fulfillment event' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const inventory = await getInventory();
    return NextResponse.json({ inventory });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to get inventory' }, { status: 500 });
  }
} 