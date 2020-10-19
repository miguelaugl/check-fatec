import { Request, Response, NextFunction } from 'express';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  console.log('This guy might be authenticated 🤔');

  return next();
}
