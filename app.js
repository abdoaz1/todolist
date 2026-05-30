import express from 'express'
import taskRoutes from './routes/tasks.routes.js';

import sqlite3 from 'sqlite3'
const app = express();
const PORT = 3000;

const db = new sqlite3.Database('./todo.db')

app.use('/tasks', taskRoutes);

app.listen(PORT, ()=>{
    console.log(`express running at port ${PORT}`)
});