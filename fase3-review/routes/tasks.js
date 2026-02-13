import express from 'express'
const router = express.Router()

const tasks = [
    {id:1, name:'lavoro'},
    {id:2, name:'studio'},
    {id:3, name:'mangia'}
]

//tutte le task
router.get('/todos', (req,res) => {

    res.json(tasks)
})

//singola task
router.get('/todos/:id', (req,res) => {
    const id = parseInt(req.params.id) //prendo l'id dall'url e lo trasformo in un intero

    const selectedTask = tasks.filter( (task) => task.id === id); 
    console.log(selectedTask);
    
    
    res.json(selectedTask);
})

//aggiungo una task
router.post('/todos', (req,res) =>{

    const newTask = {
        id: tasks.length + 1,
        name: req.body.name
    }

    tasks.push(newTask);
    res.json(tasks);
})

router.delete('/todos/:id', (req,res) => {
    const idToDelete = parseInt(req.params.id);

    const taskToDelete = tasks.findIndex((task) => task.id === idToDelete);

    tasks.splice(taskToDelete,1); //rimuovo elementi dall'array

    res.json(tasks);
})


export default router