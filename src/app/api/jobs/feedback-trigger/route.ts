import { NextRequest, NextResponse } from 'next/server';
import { feedbackTriggerJob } from '@/lib/jobs/feedbackTriggerJob';

export async function POST() {
  await feedbackTriggerJob();
  return NextResponse.json({ success: true });
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 