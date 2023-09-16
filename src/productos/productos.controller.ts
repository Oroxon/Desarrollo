import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {

    constructor (private readonly productosService: ProductosService){}

    @Get()
getProductos(){
    return this.productosService.findAll();
}
   @Get(':id')
   getproductosById(@Param('id', ParseIntPipe) id: number){

    console.log(`el id a buscar es ${id}`)
      
    return this.productosService.findById(id);

    
}

@Put(':id')

    updateproductos(@Param('id', ParseIntPipe) id: number,@Body() body){

        console.log(`el id a buscar es ${id}`)
        console.log(body);

        return this.productosService.updateproductos(body, id);

    }

    @Delete(':id')

   deleteById(@Param('id', ParseIntPipe) id: number){
    console.log(`el id a eliminar es ${id}`);
    
     return this.productosService.deleteproductos(id);
   }

   @Post()

    createproductos(@Body() @Body () body){

       
        console.log(body);

        return this.productosService.createproducto(body);
    }


} 
