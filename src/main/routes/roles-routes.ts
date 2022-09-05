import { Router } from 'express'
import { CreateRoleController } from '../../useCases/create-roles/create-roles-controller'
import { DeleteRoleController } from '../../useCases/delete-role/delete-role-controller'
import { ListRoleController } from '../../useCases/list-roles/list-roles-controller'
import { ShowRoleController } from '../../useCases/show-role/show-role-controller'
import { UpdateRoleController } from '../../useCases/update-role/update-role-controller'

const rolesRouter = Router()
const createRoleController = new CreateRoleController()
const listRoleController = new ListRoleController()
const showRoleController = new ShowRoleController()
const updateRoleController = new UpdateRoleController()
const deleteRoleController = new DeleteRoleController()

rolesRouter.post('/roles', createRoleController.handle)

rolesRouter.get('/roles', listRoleController.handle)

rolesRouter.get('/roles/:id', showRoleController.handle)

rolesRouter.put('/roles/:id', updateRoleController.handle)

rolesRouter.delete('/roles/:id', deleteRoleController.handle)

export { rolesRouter }
