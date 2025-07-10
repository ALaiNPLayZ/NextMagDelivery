import { NextRequest, NextResponse } from 'next/server';
import { getAuditLogs, simulateEncryptField } from '@/lib/services/governanceService';

export async function GET() {
  try {
    const logs = await getAuditLogs();
    return NextResponse.json({ logs });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to get audit logs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, value } = await req.json();
    if (!userId || !value) return NextResponse.json({ error: 'userId and value required' }, { status: 400 });
    const encrypted = await simulateEncryptField(userId, value);
    return NextResponse.json({ original: value, encrypted });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to encrypt field' }, { status: 500 });
  }
} 