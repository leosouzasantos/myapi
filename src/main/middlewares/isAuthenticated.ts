import { NextFunction, Request, Response } from 'express'
import { BadRequest } from '../../errors/bad-request'
import { Secret, verify } from 'jsonwebtoken'
import { auth } from '../../config/auth'

type JwtPayloadProps = {
  sub: string
}

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
    const decodedToken = verify(token, auth.secretKey as Secret)
    const { sub } = decodedToken as JwtPayloadProps
    request.user = { id: sub }
    return next()
  } catch {
    throw new BadRequest('Invalid authentication token', 401)
  }
}
