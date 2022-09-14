import express from 'express'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { rolesRouter } from './routes/roles-routes'
import { userRouter } from './routes/users-routes'
import swaggerFile from '../swagger.json'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(rolesRouter)
app.use(userRouter)

export { app }
