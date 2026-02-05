const express = require('express');
const app = express();
const port = 8000;

const user = [
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

    res.json(user)
})


app.use((req,res) => {

    res.status(404).send('errore 404, pagina inesistente')
})


app.listen(port, () => {

    console.log('il server è stato avviato');
    
})