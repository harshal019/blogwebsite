import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import AuthRoute from './routes/Auth.js'
import UserRoute from './routes/User.js'
import CategoryRoute from './routes/Category.js'
import BlogRoute from './routes/Blog.js'
import CommentRouote from './routes/Comment.js'
import BlogLikeRoute from './routes/Bloglike.js'

dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))


// route setup  

app.use('/api/auth', AuthRoute)
app.use('/api/user', UserRoute)
app.use('/api/category', CategoryRoute)
app.use('/api/blog', BlogRoute)
app.use('/api/comment', CommentRouote)
app.use('/api/blog-like', BlogLikeRoute)



mongoose.connect(process.env.MONGODB_CONN,)  //{ dbName: 'blog-content' }
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Database connection failed.', err))

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error.'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})