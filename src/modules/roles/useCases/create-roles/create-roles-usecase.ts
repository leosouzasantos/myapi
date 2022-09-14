import { Role } from '../../../../entities/role'
import { BadRequest } from '../../../../errors/bad-request'
import { RolesRepository } from '../../repositories/role-repository'

type CreateRolesDTO = {
  name: string
}

export class CreateRoleUseCase {
  async execute({ name }: CreateRolesDTO): Promise<Role> {
    const roleRepository = RolesRepository.getInstance()

    const existRole = await roleRepository.findByName(name)

    if (existRole) {
      throw new BadRequest('Role already exists')
    }

    return roleRepository.create({ name })
  }
}
