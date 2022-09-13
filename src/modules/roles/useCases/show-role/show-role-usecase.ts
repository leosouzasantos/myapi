import { Role } from '../../../../entities/role'
import { BadRequest } from '../../../../errors/bad-request'
import { RolesRepository } from '../../repositories/role-repository'

type IShowRoles = {
  id: string
}

export class ShowRoleUseCase {
  async execute({ id }: IShowRoles): Promise<Role> {
    const roleRepository = RolesRepository.getInstance()

    const role = await roleRepository.findById(id)

    if (!role) {
      throw new BadRequest('Role not found', 404)
    }

    return role
  }
}
