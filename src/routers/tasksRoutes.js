import { Router } from 'express';
import { 
    createTask, 
    getTasks, 
    updateTask, 
    deleteTask, 
    getOneTask, 
    getTaskByProject } from '../controllers/tasksControllers';

const tasksRouter = Router();

tasksRouter.post('/', createTask);
tasksRouter.put('/:id', updateTask);
tasksRouter.delete('/:id', deleteTask);
tasksRouter.get('/', getTasks);
tasksRouter.get('/:id', getOneTask);
tasksRouter.get('/project/:projectid', getTaskByProject);

export default tasksRouter;