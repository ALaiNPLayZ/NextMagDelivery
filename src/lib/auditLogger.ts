import { Request, Response, NextFunction } from 'express';

const sensitivePaths = ['/order', '/consent', '/feedback'];

export default function auditLogger(req: Request, res: Response, next: NextFunction) {
  if (sensitivePaths.some(path => req.path.startsWith(path))) {
    const userId = req.body.userId || req.query.userId || 'unknown';
    console.log(`[AUDIT] ${req.method} ${req.path} by user ${userId}`);
  }
  next();
} 