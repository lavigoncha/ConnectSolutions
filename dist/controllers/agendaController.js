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
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const agregarAgenda = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { fechaHora, linkMeet, estAgenda, ids } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO agenda (fechaHora, linkMeet, estAgenda) VALUES ('${fechaHora}','${linkMeet}','${estAgenda}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
const agregarPacienteAAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idPac, idAgenda } = req.query;
    const response = yield (0, mysql_service_1.default)(`INSERT INTO pacienteAgenda (idPac, idAgenda) VALUES ('${idPac}','${idAgenda}')`);
});
const eliminarAgenda = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mysql_service_1.default)(`DELETE FROM pacienteAgenda WHERE idAgenda = ${req.params.id}`);
    yield (0, mysql_service_1.default)(`DELETE FROM Agenda WHERE idAgenda = ${req.params.id}`);
});
//# sourceMappingURL=agendaController.js.map