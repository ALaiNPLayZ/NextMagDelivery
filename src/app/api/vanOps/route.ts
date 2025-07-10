import { NextRequest, NextResponse } from 'next/server';
import { getAllVans } from '@/lib/services/vanService';

export async function GET() {
  try {
    const vans = await getAllVans();
    return NextResponse.json({ vans });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to get vanOps info' }, { status: 500 });
  }
}

export function POST() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 