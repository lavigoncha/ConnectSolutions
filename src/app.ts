import express from 'express'
import pacienteRoutes from './routes/paciente';
import config from './config/config';

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

pacienteRoutes(app);

app.get('/prueba', async(req, res, next) => {
    const datos ={
        nomPac: "Nixon_Correa",
        Edad: 52,
        EmailPac: "svedlosku2@hotmail.com",        
    }
    const nuevosDatos = {
        ...datos,
        ciudad: 'popayan',
        profesion: 'ing civil'
    }
    const {nomPac, Edad, EmailPac} = datos;
    res.status(200).json(nuevosDatos);
});

app.listen(config.PORT, ()=>{
    return console.log(`Servidor corriendo sobre el puerto ${config.PORT}`)
});

console.log('prueba')