// import { resolve } from 'node:dns';
// import db from './db.js'
// import { rejects } from 'node:assert';

// function getAllUser(){
//     return new Promise((resolve,reject)=>{
//         db.all('SELECT * FROM users', [], (err,rows)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(rows);
//             }
//         });
//     });
// };

// function gerUserByEmail(userEmail){
//     return new Promise((resolve, reject)=>{
//         db.all('SELECT * FROM users WHERE id =?',[userEmail],(err,rows)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(rows);
//             }
//         })
//     });
// };

// export default {getAllUser,gerUserByEmail}