import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { CreateRolesTable1662313041771 } from './migrations/1662313041771-CreateRolesTable'

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [CreateRolesTable1662313041771],
})
