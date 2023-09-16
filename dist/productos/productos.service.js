"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
let ProductosService = class ProductosService {
    constructor() {
        this.productos = [
            {
                id: 1,
                productos: 'manzana',
                precio: '2'
            },
            {
                id: 2,
                productos: 'pera',
                precio: '3'
            }
        ];
    }
    findAll() {
        return this.productos;
    }
    findById(id) {
        const productos = this.productos.find(c => c.id === id);
        if (!productos) {
            throw new common_1.NotFoundException(`producto whit id ${id} does not exits`);
        }
        return productos;
    }
    updateproductos(productoBody, id) {
        const productos = this.productos.find(c => c.id === id);
        if (!productos) {
            throw new common_1.NotFoundException(`productos with id ${id} does not exits`);
        }
        return { status: 'Producto actualizado' };
    }
    deleteproductos(id) {
        const productos = this.productos.find(c => c.id === id);
        if (!productos) {
            throw new common_1.NotFoundException(`producto with id ${id} does not exits`);
        }
        return { status: 'productos eliminado' };
    }
    createproducto(productoBody) {
        const productos = this.productos.find(c => c.id === productoBody.id);
        if (productos) {
            throw new common_1.NotFoundException(`producto with id ${productoBody.id} exits`);
        }
        return { status: 'producto creado' };
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)()
], ProductosService);
//# sourceMappingURL=productos.service.js.map