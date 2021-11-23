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
const express_1 = __importDefault(require("express"));
const paciente_1 = __importDefault(require("./routes/paciente"));
const config_1 = __importDefault(require("./config/config"));
const terapeuta_1 = __importDefault(require("./routes/terapeuta"));
const errors_1 = __importDefault(require("./middlewares/errors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
(0, paciente_1.default)(app);
(0, terapeuta_1.default)(app);
app.use(errors_1.default);
app.get('/prueba', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = {
        nomPac: "Nixon_Correa",
        Edad: 52,
        EmailPac: "svedlosku2@hotmail.com",
    };
    const nuevosDatos = Object.assign(Object.assign({}, datos), { ciudad: 'popayan', profesion: 'ing civil' });
    const { nomPac, Edad, EmailPac } = datos;
    res.status(200).json(nuevosDatos);
}));
app.listen(config_1.default.PORT, () => {
    return console.log(`Servidor corriendo sobre el puerto ${config_1.default.PORT}`);
});
console.log('prueba');
//# sourceMappingURL=app.js.map