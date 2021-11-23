"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientesService = void 0;
const environment_1 = require("./../../../environments/environment");
const core_1 = require("@angular/core");
let PacientesService = class PacientesService {
    constructor(http) {
        this.http = http;
    }
    obtenerPacientes() {
        console.log('entra al servicio');
        const url = `${environment_1.environment.apiUrl}/obtenerPacientes`;
        return this.http.get(url).toPromise();
    }
    obtenerPaciente(id) { }
    agregarPaciente(paciente) { }
    actualizarPaciente(paciente) { }
    eliminarPaciente(id) { }
};
PacientesService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root'
    })
], PacientesService);
exports.PacientesService = PacientesService;
//# sourceMappingURL=pacientes.service.js.map