import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Role } from '../../entities/role'
import { User } from '../../entities/user'

import { CreateRolesTable1662313041771 } from './migrations/1662313041771-CreateRolesTable'
import { CreateUsersTable1662580157261 } from './migrations/1662580157261-CreateUsersTable'
import { AddRoleIdToUsersTable1662756779476 } from './migrations/1662756779476-AddRoleIdToUsersTable'

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Role, User],
  migrations: [
    CreateRolesTable1662313041771,
    CreateUsersTable1662580157261,
    AddRoleIdToUsersTable1662756779476,
  ],
})
