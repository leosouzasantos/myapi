import { Request, Response } from 'express'
import { CreateRoleUseCase } from './create-role-usecase'

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body

      const useCase = new CreateRoleUseCase()
      const result = await useCase.execute(data)

      return response.status(201).json(result)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
