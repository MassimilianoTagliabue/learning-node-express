import express from 'express';
const router = express.Router();

const users = [
    {id:1, nome:'ciao'},
    {id:2, nome:'pino'},
    {id:3, nome:'pippo'}
]

router.get('/', (req,res) => {

    res.send('<h1>Sei nell homepage</h1>')
})

router.get('/about', (req,res) => {

    res.send('<h1> questa è la pagina about us</h1>')
})



//Get all user
router.get('/api/users', (req, res) => {

    res.json(users)
})


//Get single user
router.get('/api/users/:id', (req,res) => {

    const id = parseInt(req.params.id); //andiamo a prendere l'id dall'url tramite il comando params
    const user = users.find((user) => user.id === id);

    if(!user){
        res.status(404).json({msg : "utente non trovato"})
    }else{
        res.status(200).json(users);
    }

})


//create user
router.post('/create', (req,res) =>{

    const newUser = {
        id : users.length +1,
        nome: req.body.nome
    }
    users.push(newUser)
    
    console.log(users);
        
    res.status(201).json(users)
})





export default router;