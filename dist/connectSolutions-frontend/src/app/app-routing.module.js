"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const pacientes_component_1 = require("./components/pacientes/pacientes.component");
const terapeuta_component_1 = require("./components/terapeuta/terapeuta.component");
const not_found_component_1 = require("./components/not-found/not-found.component");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const routes = [
    { path: 'pacientes', component: pacientes_component_1.PacientesComponent },
    { path: 'terapeuta', component: terapeuta_component_1.TerapeutaComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map