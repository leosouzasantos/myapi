import { hash } from 'bcryptjs'
import { User } from '../../../../entities/user'
import { BadRequest } from '../../../../errors/bad-request'
import { RolesRepository } from '../../../roles/repositories/role-repository'
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
    const rolesRepository = RolesRepository.getInstance()

    if (!email || !password) {
      throw new BadRequest('email/password is required', 401)
    }

    const existEmail = await usersRepository.findByEmail(email)

    if (existEmail) {
      throw new BadRequest('Email address already used', 401)
    }

    const role = await rolesRepository.findById(roleId)

    if (!role) {
      throw new BadRequest('Role not found', 404)
    }

    const hashedPassword = await hash(password, 10)
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      admin,
      role,
    })
    return user
  }
}
