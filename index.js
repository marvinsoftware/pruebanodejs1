const express = require ('express');
const app =  express(); 
//require('./db');


app.set('port',process.env.PORT || 3000 )

app.get('/', (req,res) =>{ 
    res.send('Hola Prueba NodeJS - Novatec'); 
}); 


const apiRouter = require('./routes/api');
app.use('/api', apiRouter);


app.listen(3000, () => { 
    console.log('Servidor Arrancado Mayo 23 de 2022 MARVIN'); 
}); 