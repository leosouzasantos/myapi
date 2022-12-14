import { AppDataSource } from '../infra/typeorm/data-source'
import { app } from './app'

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`server is running on port ${process.env.PORT}`)
  )
})
