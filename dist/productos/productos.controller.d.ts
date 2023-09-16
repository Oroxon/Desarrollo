import { ProductosService } from './productos.service';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    getProductos(): {
        id: number;
        productos: string;
        precio: string;
    }[];
    getproductosById(id: number): {
        id: number;
        productos: string;
        precio: string;
    };
    updateproductos(id: number, body: any): {
        status: string;
    };
    deleteById(id: number): {
        status: string;
    };
    createproductos(body: any): {
        status: string;
    };
}
