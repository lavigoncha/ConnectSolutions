"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const pacientes_service_1 = require("./services/pacientes/pacientes.service");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const header_component_1 = require("./components/header/header.component");
const footer_component_1 = require("./components/footer/footer.component");
const tabla_pacientes_component_1 = require("./components/tabla-pacientes/tabla-pacientes.component");
const not_found_component_1 = require("./components/not-found/not-found.component");
const terapeuta_component_1 = require("./components/terapeuta/terapeuta.component");
const pacientes_component_1 = require("./components/pacientes/pacientes.component");
const http_1 = require("@angular/common/http");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            tabla_pacientes_component_1.TablaPacientesComponent,
            not_found_component_1.NotFoundComponent,
            terapeuta_component_1.TerapeutaComponent,
            pacientes_component_1.PacientesComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpClientModule
        ],
        providers: [pacientes_service_1.PacientesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map