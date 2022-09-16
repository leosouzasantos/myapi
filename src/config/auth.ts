const secret = process.env.JWT_SECRETKEY as string

export const auth = {
  secretKey: secret,
  expiresIn: process.env.JWT_EXPIRES_IN,
}
