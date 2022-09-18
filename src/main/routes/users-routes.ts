import { Router } from 'express'
import multer from 'multer'
import { CreateLoginController } from '../../modules/users/useCases/create-login/create-login-controller'
import { CreateUserController } from '../../modules/users/useCases/create-user/create-user-controller'
import { ListUsersController } from '../../modules/users/useCases/list-user/list-user-controller'
import { UpdateAvatarController } from '../../modules/users/useCases/update-avatar/update-avatar-controller'
import { isAuthenticated } from '../middlewares/isAuthenticated'
import uploadConfig from '../../config/upload'

const userRouter = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
const createLoginController = new CreateLoginController()
const updateAvatarController = new UpdateAvatarController()
const upload = multer(uploadConfig)

userRouter.post('/users', isAuthenticated, createUserController.handle)
userRouter.get('/users', isAuthenticated, listUsersController.handle)
userRouter.post('/users/login', createLoginController.handle)
userRouter.patch(
  'users/avatar',
  isAuthenticated,
  upload.single('avatar'),
  updateAvatarController.handle
)

export { userRouter }
