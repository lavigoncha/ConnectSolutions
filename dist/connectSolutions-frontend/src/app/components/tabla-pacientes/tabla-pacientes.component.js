"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablaPacientesComponent = void 0;
const core_1 = require("@angular/core");
let TablaPacientesComponent = class TablaPacientesComponent {
    constructor(pacientesService) {
        this.pacientesService = pacientesService;
    }
    ngOnInit() {
        this.obtenerPacientes();
    }
    obtenerPacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.pacientesService.obtenerPacientes();
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
};
TablaPacientesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-tabla-pacientes',
        templateUrl: './tabla-pacientes.component.html',
        styleUrls: ['./tabla-pacientes.component.css']
    })
], TablaPacientesComponent);
exports.TablaPacientesComponent = TablaPacientesComponent;
//# sourceMappingURL=tabla-pacientes.component.js.map