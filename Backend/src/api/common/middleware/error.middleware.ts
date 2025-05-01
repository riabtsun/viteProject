import { ErrorRequestHandler, NextFunction, Response, Request } from 'express';

const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
  console.error('Error middleware:', err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    details: err.details || null,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
export default errorHandler;
