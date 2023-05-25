import { FastifyInstance } from 'fastify'
import { register } from '@/http/controllers/registerController'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
