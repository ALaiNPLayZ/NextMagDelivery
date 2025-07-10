import { NextRequest, NextResponse } from 'next/server';
import { getVanInfo } from '@/lib/services/vanService';
import { calculateETA } from '@/lib/utils/etaCalculator';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
  const van = await getVanInfo(id);
  if (!van) return NextResponse.json({ error: 'Van not found' }, { status: 404 });
  const eta = calculateETA({ lat: van.locationLat, lng: van.locationLng }, { lat: 40.7130, lng: -74.005 });
  return NextResponse.json({
    id: van.id,
    location: { lat: van.locationLat, lng: van.locationLng },
    eta,
    inventory: van.inventory,
  });
}

export function POST() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
} 