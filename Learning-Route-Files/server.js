import express from 'express';
const app = express();
import users from './routes/users.js'
const port = 8000;

//middleware converte il body JSON in un oggetto javascript
app.use(express.json()); //permette di leggere il req.body delle richieste POST/PUT


//rotte
app.use('/', users)

app.listen(port, () => {

    console.log('il server è stato avviato');
    
})