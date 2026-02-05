const express = require('express');
const app = express();
const port = 8000;

const users = [
    {id:1, nome:'ciao'},
    {id:2, nome:'pino'},
    {id:3, nome:'pippo'}
]



app.get('/', (req,res) => {

    res.send('<h1>Sei nell homepage</h1>')
})

app.get('/about', (req,res) => {

    res.send('<h1> questa è la pagina about us</h1>')
})

app.get('/api/users', (req, res) => {

    res.json(users)
})

//Get single post
app.get('/api/users/:id', (req,res) => {

    const id = parseInt(req.params.id); //andiamo a prendere l'id dall'url tramite il comando params
    const user = users.find((user) => user.id === id);

    if(!user){
        res.status(404).json({msg : "utente non trovato"})
    }else{
        res.status(200).json(user);
    }

})




app.use((req,res) => {

    res.status(404).send('errore 404, pagina inesistente')
})


app.listen(port, () => {

    console.log('il server è stato avviato');
    
})