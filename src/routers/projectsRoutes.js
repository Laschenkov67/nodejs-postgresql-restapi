import { Router } from 'express';
import { 
    getProjects, 
    createProject, 
    updateProject, 
    getOneProject, 
    deleteProject } from '../controllers/projectsControllers';

const projectRouter = Router();

// Routes
projectRouter.post('/', createProject);
projectRouter.get('/', getProjects);
projectRouter.put('/:id', updateProject);
projectRouter.delete('/:id', deleteProject);
projectRouter.get('/:id', getOneProject)

export default projectRouter;