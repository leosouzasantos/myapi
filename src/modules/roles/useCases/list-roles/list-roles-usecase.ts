import { RolesPaginateProperties } from '../../repositories/IRole-repository'
import { RolesRepository } from '../../repositories/role-repository'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}

export class ListRoleUseCase {
  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const roleRepository = RolesRepository.getInstance()
    const take = limit
    const skip = (Number(page) - 1) * take
    return roleRepository.findAll({ page, skip, take })
  }
}
