import express from 'express'
import pacienteRoutes from './routes/paciente';
import config from './config/config';
import terapeutaRoutes from './routes/terapeuta';
import errorHandler from './middlewares/errors';
import validarRol from './middlewares/validarRol';

const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


pacienteRoutes(app);
terapeutaRoutes(app);

app.use(errorHandler);

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