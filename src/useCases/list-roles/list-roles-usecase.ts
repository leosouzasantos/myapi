import { Role } from '../../entities/role'
import {
  RolesPaginateProperties,
  RolesRepository,
} from '../../infra/repositories/role-repository'

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
