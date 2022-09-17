import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { rolesRouter } from './routes/roles-routes'
import { userRouter } from './routes/users-routes'
import swaggerFile from '../swagger.json'
import { BadRequest } from '../errors/bad-request'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(rolesRouter)
app.use(userRouter)
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof BadRequest) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  }
)

export { app }
