import express from 'express';
const app = express();
import users from './routes/users.js'
const port = 8000;

//middleware
app.use(express.json()); //permette di mandare il json raw (da postman)


//rotte
app.use('/', users)

app.listen(port, () => {

    console.log('il server è stato avviato');
    
})