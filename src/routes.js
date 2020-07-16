import { Router } from 'express'
import User from './app/models/User'

const routes = new Router()

routes.get('/', async (req, res) => {
  const user = await User.create({
    id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
    name: 'Vicente Nascimento',
    email: 'vicente19981@live.com',
    password_hash: '1231231231'
  })
  return res.json(user)
})

export default routes
