import { NextRequest, NextResponse } from 'next/server';
import { getVanInfo } from '@/lib/services/vanService';

export async function GET() {
  // For demo, return all vans (vanOps info)
  // You may want to implement a real getAllVans in vanService
  const vans = [await getVanInfo('1'), await getVanInfo('2')];
  return NextResponse.json({ vans });
}

export function POST() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 