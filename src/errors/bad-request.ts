export class BadRequest extends Error {
  statusCode?: number
  constructor(message: string, statusCode?: number) {
    super(message)
    this.name = 'BAD REQUEST'
    this.statusCode = statusCode
  }
}
