import express, { json } from 'express';
import morgan from 'morgan';

// Import routes
import projectRoutes from './routers/projectsRoutes';
import tasksRouter from './routers/tasksRoutes'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', tasksRouter);

export default app;