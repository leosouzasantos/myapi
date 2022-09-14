import { Request, Response } from 'express'
import { CreateRoleUseCase } from './create-roles-usecase'

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body

      const createRoleUseCase = new CreateRoleUseCase()
      const result = await createRoleUseCase.execute({ name })

      return response.status(201).json(result)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
