import { NextRequest, NextResponse } from 'next/server';
import { getAuditLogs, simulateEncryptField } from '@/lib/services/governanceService';

export async function GET() {
  const logs = await getAuditLogs();
  return NextResponse.json({ logs });
}

export async function POST(req: NextRequest) {
  const { userId, value } = await req.json();
  if (!userId || !value) return NextResponse.json({ error: 'userId and value required' }, { status: 400 });
  const encrypted = await simulateEncryptField(userId, value);
  return NextResponse.json({ original: value, encrypted });
} 