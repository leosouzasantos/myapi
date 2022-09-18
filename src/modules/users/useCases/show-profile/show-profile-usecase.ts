import { User } from '../../../../entities/user'
import { BadRequest } from '../../../../errors/bad-request'
import { UsersRepository } from '../../repositories/users-repository'

type ShowProfileParams = {
  userId: string
}

export class ShowProfileUseCase {
  async execute({ userId }: ShowProfileParams): Promise<User> {
    const userRepository = UsersRepository.getInstance()
    const user = await userRepository.findById(userId)

    if (!user) {
      throw new BadRequest('User not found', 404)
    }

    return user
  }
}
