import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@/exceptions';

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const status = error.status || 500;
    const message: string = error.message || 'Something went wrong';

    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};