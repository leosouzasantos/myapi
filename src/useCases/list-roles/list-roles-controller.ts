import { Request, Response } from 'express'
import { ListRoleUseCase } from './list-roles-usecase'

export class ListRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRoleUseCase = new ListRoleUseCase()

    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1

    const limit =
      request.query.limit && Number(request.query.limit) > 0
        ? Number(request.query.limit)
        : 15

    const roles = await listRoleUseCase.execute({ page, limit })
    return response.json(roles)
  }
}
