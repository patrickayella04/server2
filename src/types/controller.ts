// src/types/controller.ts
import { Request, Response, NextFunction } from "express";

export type Controller<T = any> = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<T> | T;
