import { Role } from '../../entities/role'

export class RolesRepository {
  role: Role[]

  private static instance: RolesRepository

  constructor() {
    this.role = []
  }

  static getInstance() {
    if (!RolesRepository.instance) {
      RolesRepository.instance = new RolesRepository()
    }

    return RolesRepository.instance
  }

  async save(data: Role) {
    this.role.push(data)
    return data
  }
}
