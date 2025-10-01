import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import type { Request, Response, NextFunction } from 'express';
import errorHandler from './errorHandler';

describe('errorHandler', () => {
  let consoleErrorSpy: jest.SpiedFunction<typeof console.error>;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  const createMockRes = () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    return res;
  };

  const req = {} as Request;
  const next = jest.fn() as NextFunction;

  it('responds with 500 when status is not provided', () => {
    const res = createMockRes();

    errorHandler(new Error('boom'), req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Internal Server Error - something went wrong on our side',
      details: 'boom',
    });
  });

  it('responds with message for 400 errors', () => {
    const res = createMockRes();
    const err = Object.assign(new Error('bad input'), { status: 400 });

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Bad Request - your input was invalid',
      details: 'bad input',
    });
  });

  it('responds with message for 404 errors', () => {
    const res = createMockRes();
    const err = Object.assign(new Error('missing'), { status: 404 });

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: "Not Found - the requested resource doesn't exist",
      details: 'missing',
    });
  });
});
