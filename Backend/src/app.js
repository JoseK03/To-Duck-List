import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express();

app.use(morgan('combined'));//para seguimiento detallado de solicitudes HTTP
app.use(express.json());
app.use(cookieParser());


app.use('/api', userRouter);


export default app;