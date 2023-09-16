import { ClientService } from './client.service';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    getClient(): {
        id: number;
        nombre: string;
        direccion: string;
    }[];
    getClientById(id: number): {
        id: number;
        nombre: string;
        direccion: string;
    };
    updateCliente(id: number, body: any): {
        status: string;
    };
    deleteById(id: number): {
        status: string;
    };
    createClient(body: any): {
        status: string;
    };
}
