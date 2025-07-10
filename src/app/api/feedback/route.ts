import { NextRequest, NextResponse } from 'next/server';
import { storeFeedback } from '@/lib/services/feedbackService';

export async function POST(req: NextRequest) {
  try {
    const { userId, orderId, rating, comment } = await req.json();
    if (!userId || !orderId || typeof rating !== 'number') return NextResponse.json({ error: 'userId, orderId, and rating required' }, { status: 400 });
    await storeFeedback(userId, orderId, rating, comment);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to submit feedback' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 