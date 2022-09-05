import { Role } from '../../entities/role'
import { BadRequest } from '../../errors/bad-request'
import { RolesRepository } from '../../infra/repositories/role-repository'

type IDeleteRoles = {
  id: string
}

export class DeleteRoleUseCase {
  async execute({ id }: IDeleteRoles): Promise<void> {
    const roleRepository = RolesRepository.getInstance()

    const role = await roleRepository.findById(id)

    if (!role) {
      throw new BadRequest('Role not found', 404)
    }

    await roleRepository.delete(role)
  }
}
