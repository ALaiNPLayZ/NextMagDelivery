import { NextRequest, NextResponse } from 'next/server';
import { inventorySyncJob } from '@/lib/jobs/inventorySyncJob';

export async function POST() {
  await inventorySyncJob();
  return NextResponse.json({ success: true });
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 