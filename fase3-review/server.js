import express from 'express';
const app = express()
import tasks from './routes/tasks.js'
import logger  from './middleware/logger.js';
import errorHandler from './middleware/error.js';
const PORT = 3000;

//middleware 
app.use(express.json());
app.use(logger);    //stampa l'url con il metodo della richiesta

//rotte
app.use('/',tasks );

//error handler
app.use(errorHandler);


app.listen(PORT, () => {
    console.log('server in ascolto');
    
})