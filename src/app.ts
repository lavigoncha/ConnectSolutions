import express from 'express'

const app= express();
const port = 3000;

app.listen(port, ()=>{
    return console.log('Servidor corriendo sobre el puerto ${port}')
});

app.get('/', function (req, res) {
    res.send('Prueba del servidor')
});