import express from 'express'
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`express running at port ${PORT}`)
});