import express from 'express'
import pacienteRoutes from './routes/paciente';

const app= express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/prueba/:id', async(req, res, next) => {
    res.status(200).send('Prueba del servidor');
});

pacienteRoutes(app);
app.listen(port, ()=>{
    return console.log(`Servidor corriendo sobre el puerto ${port}`)
});

console.log('prueba')