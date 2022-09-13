import { Role } from '../../../../entities/role'
import { BadRequest } from '../../../../errors/bad-request'
import { RolesRepository } from '../../repositories/role-repository'

type UpdateRoleDTO = {
  id: string
  name: string
}

export class UpdateRoleUseCase {
  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const roleRepository = RolesRepository.getInstance()

    const role = await roleRepository.findById(id)

    if (!role) {
      throw new BadRequest('Role not found', 404)
    }

    const roleName = await roleRepository.findByName(name)
    if (roleName) {
      throw new BadRequest('Role name not informed or already in use')
    }

    role.name = name
    return roleRepository.save(role)
  }
}
