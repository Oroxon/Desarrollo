"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
let ClientService = class ClientService {
    constructor() {
        this.clients = [
            {
                id: 1,
                nombre: 'cliente 1',
                direccion: 'direccion 1'
            },
            {
                id: 2,
                nombre: 'cliente 2',
                direccion: 'direccion 2'
            }
        ];
    }
    findAll() {
        return this.clients;
    }
    findById(id) {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new common_1.NotFoundException(`client with id ${id} does not exits`);
        }
        return client;
    }
    updateCliente(clientBody, id) {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new common_1.NotFoundException(`client with id ${id} does not exits`);
        }
        return { status: 'cliente actualizado' };
    }
    deleteClient(id) {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new common_1.NotFoundException(`client with id ${id} does not exits`);
        }
        return { status: 'cliente eliminado' };
    }
    createClient(clientBody) {
        const client = this.clients.find(c => c.id === clientBody.id);
        if (client) {
            throw new common_1.NotFoundException(`client with id ${clientBody.id} exits`);
        }
        return { status: 'cliente creado' };
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)()
], ClientService);
//# sourceMappingURL=client.service.js.map