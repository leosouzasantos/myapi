import express from 'express'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { rolesRouter } from './routes/roles-routes'
import swaggerFile from '../swagger.json'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(rolesRouter)

export { app }
