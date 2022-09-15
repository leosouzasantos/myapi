import { Router } from 'express'
import { CreateUserController } from '../../modules/users/useCases/create-user/create-user-controller'
import { ListUsersController } from '../../modules/users/useCases/list-user/list-user-controller'

const userRouter = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

userRouter.post('/users', createUserController.handle)
userRouter.get('/users', listUsersController.handle)

export { userRouter }
