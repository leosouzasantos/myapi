import { Role } from '../../entities/role'
import { BadRequest } from '../../errors/bad-request'
import { RolesRepository } from '../../infra/repositories/role-repository'

type RolesDTO = {
  name: string
  create_at: Date
}

export class CreateRoleUseCase {
  async execute(data: RolesDTO) {
    const roleRepository = RolesRepository.getInstance()

    const existRole = await roleRepository.findByName(data.name)

    if (existRole) {
      throw new BadRequest('Role already exists')
    }

    const role = Role.create(data)
    const roleCreated = await roleRepository.save(role)
    return roleCreated
  }
}
