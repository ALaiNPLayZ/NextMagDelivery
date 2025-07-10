import { Request, Response, NextFunction } from 'express';

export default function consentCheck(req: Request, res: Response, next: NextFunction) {
  // Mock: always allow
  next();
} 