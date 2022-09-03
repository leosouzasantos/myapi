import { v4 as uuidv4 } from 'uuid'

type IRoles = {
  name: string
  create_at: Date
}

export class Role {
  id: string
  name: string
  create_at: string
  private constructor(props: IRoles) {
    this.name = props.name
    this.create_at = Date()
    this.id = uuidv4()
  }

  static create(props: IRoles) {
    const role = new Role(props)
    return role
  }
}
