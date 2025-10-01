import { Request, Response, NextFunction } from "express";

// Error handler must have 4 arguments: (err, req, res, next)
function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);

  const status = err.status || 500;

  let message: string;
  switch (status) {
    case 400:
      message = "Bad Request - your input was invalid";
      break;
    case 404:
      message = "Not Found - the requested resource doesn't exist";
      break;
    case 500:
    default:
      message = "Internal Server Error - something went wrong on our side";
  }

  res.status(status).json({
    error: message,
    details: err.message,
  });
}

export default errorHandler;
