import {  Injectable, NotAcceptableException, NotFoundException  } from '@nestjs/common';

@Injectable()
export class ClientService {

     private clients = [
        {
            id:1,
            nombre: 'cliente 1',
            direccion: 'direccion 1'
        },
        {
            id:2,
            nombre: 'cliente 2',
            direccion: 'direccion 2'
        }
    ]
    findAll(){
        return this.clients;
    }

    findById(id: number){

        const client = this.clients.find( c => c.id === id);

        if (!client){
            throw new NotFoundException(`client with id ${id} does not exits`);
        }
        return client;
    }
 
    updateCliente(clientBody, id){
        //validaciones del cliente
        const client = this.clients.find( c => c.id === id);

        if (!client){
            throw new NotFoundException(`client with id ${id} does not exits`);
        }
        // logica para actualizar el cliente

         return {status: 'cliente actualizado'}
    }

    deleteClient(id){
       
        const client = this.clients.find( c => c.id === id);

        if (!client){
            throw new NotFoundException(`client with id ${id} does not exits`);
        }
        // logica para eliminar

         return {status: 'cliente eliminado'}
    }

    createClient(clientBody){
        //validaciones del cliente
        const client = this.clients.find( c => c.id === clientBody.id);

        if (client){
            throw new NotFoundException(`client with id ${clientBody.id} exits`);
        }
        // logica para crear el cliente

         return {status: 'cliente creado'}
    }
}
