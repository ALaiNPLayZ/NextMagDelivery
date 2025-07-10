import { NextRequest, NextResponse } from 'next/server';
import { getPredictedItems } from '@/lib/services/predictionService';

export async function POST(req: NextRequest) {
  const { userId } = await req.json();
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });
  const predictions = await getPredictedItems(userId);
  return NextResponse.json({ predictions });
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 