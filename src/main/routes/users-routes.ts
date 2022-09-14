import { Router } from 'express'
import { CreateUserController } from '../../modules/users/useCases/create-user/create-user-controller'

const userRouter = Router()

const createUserController = new CreateUserController()

userRouter.post('/users', createUserController.handle)

export { userRouter }
