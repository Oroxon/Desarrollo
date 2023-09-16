import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductosService {

    private productos =[
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
    ]

    findAll(){
        return this.productos;
    }

    findById(id: number){
        const productos =this.productos.find(c=> c.id === id);

        if (!productos){
            throw new NotFoundException(`producto whit id ${id} does not exits`);
        }
        return productos;
          
    }
    
    updateproductos(productoBody, id){
        //validaciones del producto
        const productos = this.productos.find( c => c.id === id);

        if (!productos){
            throw new NotFoundException(`productos with id ${id} does not exits`);
        }
        // logica para actualizar el producto

         return {status: 'Producto actualizado'}
    }

    deleteproductos(id){
       
        const productos = this.productos.find( c => c.id === id);

        if (!productos){
            throw new NotFoundException(`producto with id ${id} does not exits`);
        }
        // logica para eliminar

         return {status: 'productos eliminado'}
    }

    createproducto(productoBody){
        // validaciones
        const productos  = this.productos.find( c => c.id === productoBody.id);

        if (productos){
            throw new NotFoundException(`producto with id ${productoBody.id} exits`);
        }
        // logica para crear 

         return {status: 'producto creado'}
    }

}