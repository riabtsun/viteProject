import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';

declare module 'express' {
  interface Request {
    user?: jwt.JwtPayload;
  }
}

module.exports.checkAuth = (expectedIssuer: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

      if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
      if (decoded.iss || decoded.iss !== expectedIssuer) return res.status(401).json({ message: 'Unauthorized' });

      req.user = decoded;
      next();
    } catch (error) {
      console.log('JWT error', error);
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
};