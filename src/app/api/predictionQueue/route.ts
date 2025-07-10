import { NextRequest, NextResponse } from 'next/server';
import { redisClient } from '@/lib/redis';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });
  const redisQueue = await redisClient.get(`predictions:${userId}`);
  const dbQueue = await prisma.prediction.findMany({ where: { userId, status: 'queued' } });
  return NextResponse.json({ userId, redisQueue: redisQueue ? JSON.parse(redisQueue) : [], dbQueue });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });
  await redisClient.del(`predictions:${userId}`);
  await prisma.prediction.updateMany({ where: { userId, status: 'queued' }, data: { status: 'expired' } });
  return NextResponse.json({ userId, expired: true });
} 