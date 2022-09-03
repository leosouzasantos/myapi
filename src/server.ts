import express from 'express'
import cors from 'cors'
import { rolesRouter } from './routes/roles-routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(rolesRouter)

app.listen(3333, () => console.log('Server is running on port 3333'))
