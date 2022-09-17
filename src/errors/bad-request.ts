export class BadRequest extends Error {
  public readonly message: string
  public readonly statusCode: number
  constructor(message: string, statusCode: number) {
    super(message)
    this.name = 'BAD REQUEST'
    this.statusCode = statusCode
  }
}
