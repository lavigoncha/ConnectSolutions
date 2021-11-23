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
const agregarTerapeuta = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nomTerap, EmailTerap, idTema } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO terapeuta (nomTerap, EmailTerap, idTema) VALUES ('${nomTerap}','${EmailTerap}','${idTema}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=terapeutaController.js.map