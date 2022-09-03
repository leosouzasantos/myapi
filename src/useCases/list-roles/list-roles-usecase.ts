import { Role } from '../../entities/role'
import { RolesRepository } from '../../infra/repositories/role-repository'

export class ListRoleUseCase {
  async execute(): Promise<Role[]> {
    const roleRepository = RolesRepository.getInstance()
    return roleRepository.findAll()
  }
}
