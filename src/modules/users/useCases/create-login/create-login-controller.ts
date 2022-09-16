import { instanceToInstance } from 'class-transformer'
import { Request, Response } from 'express'
import { CreateLoginUseCase } from './create-login-usecase'

export class CreateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body
      const createLoginUseCase = new CreateLoginUseCase()
      const { user, token } = await createLoginUseCase.execute({
        email,
        password,
      })
      return response.status(201).json(instanceToInstance({ user, token }))
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
