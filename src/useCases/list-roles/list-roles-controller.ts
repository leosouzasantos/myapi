import { Request, Response } from 'express'
import { ListRoleUseCase } from './list-roles-usecase'

export class ListRoleController {
  async handle(request: Request, response: Response) {
    const listRoleUseCase = new ListRoleUseCase()
    const roles = await listRoleUseCase.execute()
    return response.json(roles)
  }
}
