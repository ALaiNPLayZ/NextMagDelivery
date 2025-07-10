import { NextRequest, NextResponse } from 'next/server';
import { getAllFeedback } from '@/lib/services/feedbackService';

export async function GET() {
  try {
    const feedback = await getAllFeedback();
    return NextResponse.json({ feedback });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to get feedback' }, { status: 500 });
  }
}

export async function POST() {
  try {
    // No-op for triggerFeatureUpdate
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to trigger feature update' }, { status: 500 });
  }
} 