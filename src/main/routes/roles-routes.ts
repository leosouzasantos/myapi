import { Router } from 'express'
import { CreateRoleController } from '../../useCases/create-roles/create-roles-controller'
import { ListRoleController } from '../../useCases/list-roles/list-roles-controller'

const rolesRouter = Router()
const createRoleController = new CreateRoleController()
const listRoleController = new ListRoleController()

rolesRouter.post('/roles', createRoleController.handle)

rolesRouter.get('/roles', listRoleController.handle)

export { rolesRouter }
