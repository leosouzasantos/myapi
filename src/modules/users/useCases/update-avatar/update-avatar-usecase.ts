import path from 'path'
import fs from 'fs'
import { User } from '../../../../entities/user'
import { BadRequest } from '../../../../errors/bad-request'
import { UsersRepository } from '../../repositories/users-repository'
import uploadConfig from '../../../../config/upload'

type UpdateAvatarDTO = {
  userId: string
  avatarFilename: string
}

export class UpdateAvatarUseCase {
  async execute({ userId, avatarFilename }: UpdateAvatarDTO): Promise<User> {
    const userRepository = UsersRepository.getInstance()

    const user = await userRepository.findByEmail(userId)

    if (!user) {
      throw new BadRequest('Only authenticated users can change avatar', 401)
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }
    user.avatar = avatarFilename
    return await userRepository.save(user)
  }
}
