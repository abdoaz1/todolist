import bcrypt from 'bcrypt'
import authModel from '../models/auth.model.js';
import jwt from 'jsonwebtoken';

async function register(req,res){
    try{
        const {full_name , email, password} = req.body;
        const emailExists = await authModel.getUserByEmail(email);
        if(emailExists){
            return res.status(400).json({ success: false, message: "Please use another email address"})
        }
        // continue register
        const hashedPassword = await bcrypt.hash(password,10);
        await authModel.registerUser(full_name,email,hashedPassword);
        return res.status(201).json({ success: true, message: "registered sucessfully!"});

    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: "Internal server error!"});
    }
};

async function login(req,res){
    try{
        // is the user exists
        const {email, password} = req.body;
        const user = await authModel.getUserByEmail(email);
        if(!user){
            return res.status(401).json({ success: false, message: "Invalid email or password"});
        }
        // if the password correct
        const matchPassword = await bcrypt.compare(password,user.password);
        if(matchPassword){
            const token = jwt.sign({
                userId: user.id,
                email: user.email
            },process.env.JWT_SECRET,{expiresIn:'7d'})
            return res.status(200).json({
                    success: true,
                    token: token,
                    user: {id: user.id, email: user.email, full_name: user.full_name} 
                });
        }else{
            return res.status(401).json({ success: false, message: "Invalid email or password"});
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: "Internal server error!"});
    }
};

export {login, register}