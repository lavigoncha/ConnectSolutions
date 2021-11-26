import { Router } from "express";
import { actualizarPaciente, agregarPaciente, eliminarPaciente, obtenerPaciente, obtenerPacientes } from "../controllers/pacienteController";
import errorHandler from "../middlewares/errors";
import validarRol from "../middlewares/validarRol";

const pacienteRoutes = (app) => {
    const router = Router();
    app.use('/', router);

    router.get('/obtenerPacientes', obtenerPacientes);
    router.get('/obtenerPaciente/:id', obtenerPaciente);
    router.post('/agregarPaciente', agregarPaciente);
    router.put('/actualizarPaciente/:id', actualizarPaciente);
    router.delete('/eliminarPaciente/:id', eliminarPaciente);

    router.use(errorHandler);


}

export default pacienteRoutes;
