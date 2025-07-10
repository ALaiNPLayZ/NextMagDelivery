import { NextRequest, NextResponse } from 'next/server';
import { getRFMScore } from '@/lib/services/featureStoreService';

export function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });
    const rfm = getRFMScore(userId);
    return NextResponse.json({ userId, rfm });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to get feature score' }, { status: 500 });
  }
}

export function POST() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 