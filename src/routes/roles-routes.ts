import { Router } from 'express'
import { CreateRoleController } from '../useCases/create-role/create-role-controller'

const rolesRouter = Router()

const createRoleController = new CreateRoleController()

rolesRouter.post('/roles', createRoleController.handle)

export { rolesRouter }
