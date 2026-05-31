import db from './db.js'

function getAllUser(){
    return new Promise((resolve,reject)=>{
        db.all('SELECT * FROM users', [], (err,rows)=>{
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        });
    });
};

function getUserByEmail(userEmail){
    return new Promise((resolve, reject)=>{
        db.get('SELECT * FROM users WHERE email =?',[userEmail],(err,rows)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(rows);
            }
        })
    });
};

function registerUser(full_name, email, password){
    return new Promise((resolve, reject)=>{
        db.run("INSERT INTO users (full_name, email, password) VALUES(?,?,?)" , [full_name, email, password],(err)=>{
            if(err){
                reject(err);
            }else{
                resolve(this.lastID);
            }
        });
    });
};

export default {getAllUser,getUserByEmail, registerUser}