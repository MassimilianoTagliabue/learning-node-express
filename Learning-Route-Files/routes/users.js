import express from 'express';
const router = express.Router();

const users = [
    {id:1, nome:'ciao'},
    {id:2, nome:'pino'},
    {id:3, nome:'pippo'}
]

//Get all user
app.get('/api/users', (req, res) => {

    res.json(users)
})


//Get single user
app.get('/api/users/:id', (req,res) => {

    const id = parseInt(req.params.id); //andiamo a prendere l'id dall'url tramite il comando params
    const user = users.find((user) => user.id === id);

    if(!user){
        res.status(404).json({msg : "utente non trovato"})
    }else{
        res.status(200).json(user);
    }

})

export default router;