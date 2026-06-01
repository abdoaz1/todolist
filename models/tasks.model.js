import db from './db.js'

function getTasksByUserId(userId){
    return new Promise((resolve,reject)=>{
        db.all('SELECT * FROM tasks WHERE user_id = ?', [userId], (err,rows)=>{
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        });
    });
};

function addTaskByUserId(taskData, userId){
    const {name, description, priority} = taskData;
    return new Promise( (resolve, reject) =>{
        db.run('INSERT INTO tasks (user_id ,name, description, priority) VALUES (?,?,?,?)',
            [userId, name, description, priority] ,
            function (err){
            if(err){
                reject(err);
            }else{
                resolve(this.lastID);
            }
        })
    } )
};

function getTaskById(taskId, userId){
    return new Promise( (resolve, reject) =>{
        db.get('SELECT * FROM tasks WHERE id = ? AND user_id = ?', [taskId, userId], (err,row) => {
            if(err){
                reject(err);
            }else{
                resolve(row);
            }
        });
    });
};

export {getTasksByUserId, addTaskByUserId, getTaskById}