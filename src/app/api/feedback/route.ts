import { NextRequest, NextResponse } from 'next/server';
import { storeFeedback } from '@/lib/services/feedbackService';

export async function POST(req: NextRequest) {
  const { userId, orderId, rating, comment } = await req.json();
  if (!userId || !orderId || typeof rating !== 'number') return NextResponse.json({ error: 'userId, orderId, and rating required' }, { status: 400 });
  await storeFeedback(userId, orderId, rating, comment);
  return NextResponse.json({ success: true });
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 