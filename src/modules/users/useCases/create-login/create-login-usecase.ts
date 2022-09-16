import { compare } from 'bcryptjs'
import { BadRequest } from '../../../../errors/bad-request'
import { UsersRepository } from '../../repositories/users-repository'
import { sign } from 'jsonwebtoken'
import { auth } from '../../../../config/auth'
import { User } from '../../../../entities/user'

type TokenResponse = {
  user: User
  token: string
}

type CreateLoginDTO = {
  email: string
  password: string
}

export class CreateLoginUseCase {
  async execute({ email, password }: CreateLoginDTO): Promise<TokenResponse> {
    const usersRepository = UsersRepository.getInstance()

    const user = await usersRepository.findByEmail(email)

    if (!user) {
      throw new BadRequest('Incorrect email/password combination', 401)
    }

    const passwordValid = await compare(password, user.password)

    if (!passwordValid) {
      throw new BadRequest('Incorrect email/password combination', 401)
    }
    const token = sign({}, auth.secretKey, {
      subject: user.id,
      expiresIn: auth.expiresIn,
    })

    return { user, token }
  }
}
