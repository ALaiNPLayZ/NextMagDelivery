import { NextRequest, NextResponse } from 'next/server';
import { mockETLJob } from '@/lib/jobs/mockETLJob';

export async function POST() {
  await mockETLJob();
  return NextResponse.json({ success: true });
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 