import express from 'express'
import { GoogleLogin, Login, Logout, Register,IsAdmin } from '../controllers/Auth.js'
import { authenticate } from '../middleware/authenticate.js'

const AuthRoute = express.Router()

AuthRoute.post('/register', Register)
AuthRoute.post('/login', Login)
AuthRoute.post('/google-login', GoogleLogin)
AuthRoute.get('/logout', authenticate, Logout)
AuthRoute.post("/add-admin", IsAdmin)


export default AuthRoute