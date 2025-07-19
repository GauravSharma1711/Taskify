
import express from 'express'

import  dotenv from 'dotenv'
dotenv.config()

import cookieParser from 'cookie-parser'
import cors from 'cors'

import connectDB from './db/db.js';

import  authRoute from './routes/auth.route.js'
import projectRoute from './routes/project.routes.js'
import noteRoute from './routes/note.routes.js'
import taskRoute from './routes/task.routes.js'


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))




app.use('/api/v1/auth',authRoute);
app.use('/api/v1/projct',projectRoute);
app.use('/api/v1/task',taskRoute);
app.use('/api/v1/note',noteRoute);

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`);
    })
})
.catch((err)=>{
    console.error("MongoDB connection error",err);
    process.exit(1);
})

