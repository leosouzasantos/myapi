import { Role } from '../../entities/role'

export class RolesRepository {
  roles: Role[]

  private static instance: RolesRepository

  constructor() {
    this.roles = []
  }

  static getInstance() {
    if (!RolesRepository.instance) {
      RolesRepository.instance = new RolesRepository()
    }

    return RolesRepository.instance
  }

  async findByName(name: string): Promise<Role | undefined> {
    return this.roles.find((role) => role.name === name)
  }

  async save(data: Role) {
    this.roles.push(data)
    return data
  }

  async findAll(): Promise<Role[]> {
    return this.roles
  }
}
