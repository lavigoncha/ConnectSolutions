"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = require("../controllers/pacienteController");
const errors_1 = __importDefault(require("../middlewares/errors"));
const validarRol_1 = __importDefault(require("../middlewares/validarRol"));
const pacienteRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.use(validarRol_1.default);
    router.get('/obtenerPacientes', pacienteController_1.obtenerPacientes);
    router.get('/obtenerPaciente/:id', pacienteController_1.obtenerPaciente);
    router.post('/agregarPaciente', pacienteController_1.agregarPaciente);
    router.put('/actualizarPaciente/:id', pacienteController_1.actualizarPaciente);
    router.delete('/eliminarPaciente/:id', pacienteController_1.eliminarPaciente);
    router.use(errors_1.default);
};
exports.default = pacienteRoutes;
//# sourceMappingURL=paciente.js.map