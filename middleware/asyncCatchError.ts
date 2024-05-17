import { Request, Response, NextFunction } from 'express';


const asyncCatchError = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((error) => {
    next(error);
  });
};


export default asyncCatchError;
