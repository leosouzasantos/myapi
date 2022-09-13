import { Request, Response } from 'express'
import { UpdateRoleUseCase } from './update-role-usecase'

export class UpdateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const { name } = request.body

      const useCase = new UpdateRoleUseCase()
      const result = await useCase.execute({ id, name })

      return response.status(200).json(result)
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
