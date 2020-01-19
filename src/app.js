import express, { json } from 'express'
import morgan from 'morgan'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

//Routes

export default app;