import express from 'express'
import { createTask, deleteTask, getTask, getTasks } from '../controller/taskController.js'
const router = express.Router()


//tutte le task
router.get('/todos', getTasks);

//singola task
router.get('/todos/:id',getTask );

//aggiungo una task
router.post('/todos', createTask );

//elimino una task
router.delete('/todos/:id', deleteTask );


export default router