import { Repository } from 'typeorm'
import { User } from '../../../entities/user'
import { AppDataSource } from '../../../infra/typeorm/data-source'
import {
  CreateUserDTO,
  IUserRepository,
  PaginateParams,
  UsersPaginateProperties,
} from './IUsers-repository'

export class UsersRepository implements IUserRepository {
  private repository: Repository<User>
  constructor() {
    this.repository = AppDataSource.getRepository(User)
  }
  async create(data: CreateUserDTO): Promise<User> {
    const user = this.repository.create(data)
    await this.repository.save(user)
    return user
  }
  async save(user: User): Promise<User> {
    await this.repository.save(user)
    return user
  }
  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<UsersPaginateProperties> {
    const [users, count] = await this.repository
      .createQueryBuilder('r')
      .leftJoinAndSelect('r.role', 'role')
      .skip(skip)
      .take(take)
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: users,
    }
    return result
  }
  async findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id })
  }
  async findByName(name: string): Promise<User | null> {
    return this.repository.findOneBy({ name })
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findOneBy({ email })
  }
  async delete(user: User): Promise<void> {
    await this.repository.remove(user)
  }
}
