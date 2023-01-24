import { Request, Response, NextFunction } from 'express';

export const headerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  req.headers['accept'] = 'application/json';
  next();
};
