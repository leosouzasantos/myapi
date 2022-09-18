import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { UpdateAvatarUseCase } from './update-avatar-usecase'

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarUseCase = new UpdateAvatarUseCase()
    const user = await updateAvatarUseCase.execute({
      userId: request.user.id,
      avatarFilename: request.file?.filename,
    })
    return response.json(instanceToInstance(user))
  }
}
