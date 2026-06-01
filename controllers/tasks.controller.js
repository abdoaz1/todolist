import { getTasksByUserId, addTaskByUserId, getTaskById } from '../models/tasks.model.js'
async function getAllTasks(req,res){
    try{
        const userId = req.user.userId;
        const tasks = await getTasksByUserId(userId);
        return res.status(200).json({success: true, tasks});
    }
    catch (error){
        next(err);
    }
};

async function addTask(req,res) {
    try{
        const userId = req.user.userId;
        const taskData = {
            name: req.body.name,
            description: req.body.description,
            priority: req.body.priority
        }
        const taskId = await addTaskByUserId(taskData, userId);
        return res.status(201).json({success: true, taskId});
    }
    catch (error){
        next(err);
    }
}

async function getTask(req,res) {
    try{
        const userId = req.user.userId;
        const taskId = req.params.id;
        // does this task exist and its user is correct
        const task = await getTaskById(taskId , userId);
        if(task){
            return res.status(200).json({success: true, task});
        }else{
            return res.status(404).json({success: false, message: "Task not found!"});
        }
    }
    catch(error){
        next(err);
    }
}


export {getAllTasks, addTask, getTask};