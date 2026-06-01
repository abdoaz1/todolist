import express from 'express';
import { getAllTasks, addTask , getTask} from '../controllers/tasks.controller.js';
import { verifyToken } from '../middleware/jwt.middleware.js';
import { handleValidation } from '../middleware/handleValidation.middleware.js';
import { validateAddTask } from '../middleware/tasks.middleware.js';

const router = express.Router();
router.use(verifyToken);

router.route('/tasks')
    .get(getAllTasks)
    .post(validateAddTask, handleValidation, addTask);

router.get('/tasks/:id', getTask);
// router.delete('/tasks/:id')
// router.delete('/tasks/:id/permanent')
// router.put('/tasks/:id') edit the task

// categories stuff
// make new category
// edit category name
// remove category [all tasks go back to the default]
// set category to a task [move from default to the category]
// get tasks by category


export default router;