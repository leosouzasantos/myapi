import { Router } from 'express'
import { CreateLoginController } from '../../modules/users/useCases/create-login/create-login-controller'
import { CreateUserController } from '../../modules/users/useCases/create-user/create-user-controller'
import { ListUsersController } from '../../modules/users/useCases/list-user/list-user-controller'

const userRouter = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const createLoginController = new CreateLoginController()

userRouter.post('/users', createUserController.handle)
userRouter.get('/users', listUsersController.handle)
userRouter.post('/users/login', createLoginController.handle)

export { userRouter }
