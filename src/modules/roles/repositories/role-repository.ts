import { Repository } from 'typeorm'
import { Role } from '../../../entities/role'
import { AppDataSource } from '../../../infra/typeorm/data-source'
import {
  CreateRoleDTO,
  IRolesRepository,
  PaginateParams,
  RolesPaginateProperties,
} from './IRole-repository'

export class RolesRepository implements IRolesRepository {
  private repository: Repository<Role>

  private static instance: RolesRepository

  private constructor() {
    this.repository = AppDataSource.getRepository(Role)
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.instance) {
      RolesRepository.instance = new RolesRepository()
    }
    return RolesRepository.instance
  }

  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = this.repository.create({ name })
    await this.repository.save(role)
    return role
  }

  async save(role: Role): Promise<Role> {
    await this.repository.save(role)
    return role
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role)
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: roles,
    }
    return result
  }

  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name })
  }

  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({ id })
  }
}
