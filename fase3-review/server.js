import express from 'express';
const app = express()
import tasks from './routes/tasks.js'
const PORT = 3000;

//middleware 
app.use(express.json());

//rotte
app.use('/',tasks )


app.listen(PORT, () => {
    console.log('server in ascolto');
    
})