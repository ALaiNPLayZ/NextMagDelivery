import { NextRequest, NextResponse } from 'next/server';
import { setUserConsent } from '@/lib/services/consentService';

export async function POST(req: NextRequest) {
  try {
    const { userId, consent } = await req.json();
    if (!userId || typeof consent !== 'boolean') return NextResponse.json({ error: 'userId and consent required' }, { status: 400 });
    const user = await setUserConsent(userId, consent);
    return NextResponse.json({ success: true, user });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to update consent' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 