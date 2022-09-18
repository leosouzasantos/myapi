import { hash } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { AppDataSource } from '../data-source'

async function create() {
  const connection = await AppDataSource.initialize()
  // Create Role
  const roleId = uuidv4()
  await connection.query(
    `INSERT INTO ROLES(id, name)
      values('${roleId}', 'admin')
    `
  )
  // Create User
  const userId = uuidv4()
  const password = await hash('1234', 10)
  await connection.query(
    `INSERT INTO USERS(id, name, email, password, admin, roleId)
      values('${userId}', 'admin', 'a@a.com', '${password}', true)
    `
  )

  await connection.destroy()
}

create().then(() => console.log('User admin created!'))
