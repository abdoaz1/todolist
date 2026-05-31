import bcrypt from 'bcrypt'
import authModel from '../models/auth.model.js';

async function allUsersPage(req,res){
    const allusers = await taskModel.getAllUser();
    res.json(allusers);
};

async function register(req,res){
    try{
        const {full_name , email, password} = req.body;
        if(!email || !password || !full_name){
            return res.status(400).send("please enter registeration data");
        }
        const emailExists = await authModel.getUserByEmail(email);
        if(emailExists){
            return res.status(400).send("Please use another email address")
        }
        // continue register
        const hashedPassword = await bcrypt.hash(password,10);
        await authModel.registerUser(full_name,email,hashedPassword);
        return res.status(201).send("registered sucessfully!");

    }catch(err){
        console.error(err);
        return res.status(500).send("bad request");
    }
};

async function login(req,res){
    // return res.status(200).send("test works!");
    try{
        // is the user exists
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send("please enter login data");
        }
        const emailExists = await authModel.getUserByEmail(email);
        if(!emailExists){
            return res.status(400).send("Invalid email or password");
        }
        // if the password correct
        const matchPassword = await bcrypt.compare(password,emailExists.password);
        if(matchPassword){
            return res.status(200).json({ id: emailExists.id, email: emailExists.email, full_name: emailExists.full_name });
        }else{
            return res.status(400).send("Invalid email or password");
        }
    }
    catch(err){
        return res.status(500).send("server error!");
    }
};

export default {allUsersPage, register, login}