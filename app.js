import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js'
import { errorHandler } from './middleware/errorHandler.middleware.js';

const app = express();
const PORT = 3000;

app.use(express.json());
dotenv.config()

app.use('/auth', authRoutes);
app.use('/', tasksRoutes)

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`express running at port ${PORT}`)
});