import express from 'express'
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv'

const app = express();
const PORT = 3000;

app.use(express.json());
dotenv.config()
app.use('/auth', authRoutes);


app.listen(PORT, ()=>{
    console.log(`express running at port ${PORT}`)
});