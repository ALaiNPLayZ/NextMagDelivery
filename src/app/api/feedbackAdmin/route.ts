import { NextRequest, NextResponse } from 'next/server';
import { getAllFeedback } from '@/lib/services/feedbackService';

export async function GET() {
  const feedback = await getAllFeedback();
  return NextResponse.json({ feedback });
}

export async function POST() {
  // No-op for triggerFeatureUpdate
  return NextResponse.json({ success: true });
} 