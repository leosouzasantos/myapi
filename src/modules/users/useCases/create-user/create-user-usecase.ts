import { hash } from 'bcryptjs'
import { User } from '../../../../entities/user'
import { BadRequest } from '../../../../errors/bad-request'
import { UsersRepository } from '../../repositories/users-repository'

type CreateUserDTO = {
  name: string
  email: string
  password: string
  admin: boolean
  roleId: string
}

export class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
    admin,
    roleId,
  }: CreateUserDTO): Promise<User> {
    const usersRepository = UsersRepository.getInstance()

    if (!email || !password) {
      throw new BadRequest('email/password is required')
    }

    const existEmail = await usersRepository.findByEmail(email)

    if (existEmail) {
      throw new BadRequest('Email address already used')
    }

    const role = await usersRepository.findById(roleId)

    if (!role) {
      throw new BadRequest('Role not found', 404)
    }

    const hashedPassword = await hash(password, 10)
    return usersRepository.create({
      name,
      email,
      password: hashedPassword,
      admin,
      role,
    })
  }
}
