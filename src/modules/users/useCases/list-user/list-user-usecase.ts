import { UsersPaginateProperties } from '../../repositories/IUsers-repository'
import { UsersRepository } from '../../repositories/users-repository'

type ListUserUseCaseParams = {
  page: number
  limit: number
}

export class ListUsersUseCase {
  async execute({
    limit,
    page,
  }: ListUserUseCaseParams): Promise<UsersPaginateProperties> {
    const userRepository = UsersRepository.getInstance()
    const take = limit
    const skip = (Number(page) - 1) * take
    return userRepository.findAll({ page, skip, take })
  }
}
