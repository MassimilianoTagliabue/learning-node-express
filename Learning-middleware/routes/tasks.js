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
router.get('/todos/:id', (req,res, next) => {
    const id = parseInt(req.params.id) //prendo l'id dall'url e lo trasformo in un intero

    const selectedTask = tasks.find( (task) => task.id === id);    //con filter se non trova niente restituisce l'array vuoto
    //console.log(selectedTask);
    if(!selectedTask){      
        const error = new Error(`il task con ${id} non è stato trovato`);  
        return next(error)
    }
    
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

    console.log(taskToDelete);
    
    if(taskToDelete === (-1)){      
        const error = new Error(`il task con ${id} non è stato trovato`);  
        return next(error)
    }
    else
    tasks.splice(taskToDelete,1); //rimuovo elementi dall'array

    res.json(tasks);
})


export default router