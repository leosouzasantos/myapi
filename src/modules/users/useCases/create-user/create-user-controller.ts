import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user-usecase'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, admin, roleId } = request.body

      const createUserUseCase = new CreateUserUseCase()
      const result = createUserUseCase.execute({
        name,
        email,
        password,
        admin,
        roleId,
      })
      return response.status(201).json(result)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}