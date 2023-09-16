export declare class ProductosService {
    private productos;
    findAll(): {
        id: number;
        productos: string;
        precio: string;
    }[];
    findById(id: number): {
        id: number;
        productos: string;
        precio: string;
    };
    updateproductos(productoBody: any, id: any): {
        status: string;
    };
    deleteproductos(id: any): {
        status: string;
    };
    createproducto(productoBody: any): {
        status: string;
    };
}
