import express from 'express';
const app = express();
import users from './routes/users.js'
const port = 8000;



app.use('/api/users', users)


app.get('/', (req,res) => {

    res.send('<h1>Sei nell homepage</h1>')
})

app.get('/about', (req,res) => {

    res.send('<h1> questa è la pagina about us</h1>')
})




app.listen(port, () => {

    console.log('il server è stato avviato');
    
})