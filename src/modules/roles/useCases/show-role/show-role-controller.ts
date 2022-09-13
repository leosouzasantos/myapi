import { Request, Response } from 'express'
import { ShowRoleUseCase } from './show-role-usecase'

export class ShowRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const useCase = new ShowRoleUseCase()
      const result = await useCase.execute({ id })

      return response.status(200).json(result)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
