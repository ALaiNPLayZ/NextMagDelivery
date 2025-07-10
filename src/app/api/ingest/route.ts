import { NextRequest, NextResponse } from 'next/server';
import { ingestPOS, ingestApp, ingestLoyalty, ingestExternal } from '@/lib/services/ingestService';

export async function POST(req: NextRequest) {
  const { type, payload } = await req.json();
  if (!type || !payload) return NextResponse.json({ error: 'type and payload required' }, { status: 400 });
  let event;
  switch (type) {
    case 'POS': event = await ingestPOS(payload); break;
    case 'App': event = await ingestApp(payload); break;
    case 'Loyalty': event = await ingestLoyalty(payload); break;
    case 'External': event = await ingestExternal(payload); break;
    default: return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }
  return NextResponse.json({ success: true, event });
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 