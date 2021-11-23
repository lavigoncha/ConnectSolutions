"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPaciente = exports.actualizarPaciente = exports.agregarPaciente = exports.obtenerPaciente = exports.obtenerPacientes = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerPacientes = (req, res, next) => {
    (0, mysql_service_1.default)('SELECT * FROM paciente').then(response => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error);
    });
};
exports.obtenerPacientes = obtenerPacientes;
const obtenerPaciente = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM paciente WHERE idPac = ${id}`);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.obtenerPaciente = obtenerPaciente;
const agregarPaciente = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nomPac, Edad, EmailPac } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO paciente (nomPac, Edad, EmailPac) VALUES ('${nomPac}','${Edad}', '${EmailPac}')`);
        console.log(response);
        res.status(201).json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
exports.agregarPaciente = agregarPaciente;
const actualizarPaciente = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nomPac, Edad, EmailPac } = req.body;
    const { id } = req.params;
    try {
        const response = yield (0, mysql_service_1.default)(`UPDATE paciente SET nomPac = '${nomPac}', Edad = '${Edad}', EmailPac = '${EmailPac}' WHERE idPac='${id}'`);
        console.log(response);
        res.json({ message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${id}` });
    }
    catch (error) {
        next(error);
    }
});
exports.actualizarPaciente = actualizarPaciente;
const eliminarPaciente = (req, res, next) => {
    const { id } = req.params;
    (0, mysql_service_1.default)(`DELETE FROM paciente WHERE idPac = '${id}' `).then(response => {
        res.json({ message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${id}` });
    }).catch(error => {
        next(error);
    });
};
exports.eliminarPaciente = eliminarPaciente;
//# sourceMappingURL=pacienteController.js.map