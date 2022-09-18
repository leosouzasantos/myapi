import { instanceToInstance } from 'class-transformer'
import { Request, response, Response } from 'express'
import { ShowProfileUseCase } from './show-profile-usecase'

export class ShowProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showProfileUseCase = new ShowProfileUseCase()
    const userId = request.user.id
    const user = showProfileUseCase.execute({ userId })

    return response.json(instanceToInstance(user))
  }
}
