const tasks = [
    {id:1, name:'lavoro'},
    {id:2, name:'studio'},
    {id:3, name:'mangia'}
]

//@desc tutte le task
//@route GET /todos
export const getTasks = (req,res,next) =>{

    res.status(200).json(tasks);
}

//@desc singola task
//@route GET /todos/:{id}
export const getTask = (req,res, next) => {
    const id = parseInt(req.params.id) //prendo l'id dall'url e lo trasformo in un intero

    const selectedTask = tasks.find( (task) => task.id === id);    //con filter se non trova niente restituisce l'array vuoto
    //console.log(selectedTask);
    if(!selectedTask){      
        const error = new Error(`il task con ${id} non è stato trovato`);  
        return next(error)
    }
    
    res.json(selectedTask);
};

//@desc aggiungi una task
//@route POST /todos

export const createTask = (req,res) =>{

    const newTask = {
        id: tasks.length + 1,
        name: req.body.name
    }

    tasks.push(newTask);
    res.json(tasks);
};


//@desc cancella una task
//@route DELETE /todos/:{id}
export const deleteTask = (req,res) => {
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
}