import { Request, Response } from 'express'
import { DeleteRoleUseCase } from './delete-role-usecase'

export class DeleteRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const useCase = new DeleteRoleUseCase()
      await useCase.execute({ id })

      return response.status(204).send()
    } catch (err: any) {
      return response.status(400).json(err.message)
    }
  }
}
