import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser';
import taskRouter from './routes/task.routes.js';
import cors from 'cors';

dotenv.config()
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan('combined'));//para seguimiento detallado de solicitudes HTTP
app.use(express.json());
app.use(cookieParser());


app.use('/api', userRouter);
app.use('/api',taskRouter)


export default app;