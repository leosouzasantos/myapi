import { NextFunction, Request, Response } from 'express'
import { BadRequest } from '../../errors/bad-request'
import { Secret, verify } from 'jsonwebtoken'
import { auth } from '../../config/auth'

export const isAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new BadRequest('Failed to verify access token', 401)
  }
  const token = authHeader.replace('Bearer ', '')
  try {
    verify(token, auth.secretKey as Secret)
    return next()
  } catch {
    throw new BadRequest('Invalid authentication token', 401)
  }
}
