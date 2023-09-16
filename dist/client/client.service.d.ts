export declare class ClientService {
    private clients;
    findAll(): {
        id: number;
        nombre: string;
        direccion: string;
    }[];
    findById(id: number): {
        id: number;
        nombre: string;
        direccion: string;
    };
    updateCliente(clientBody: any, id: any): {
        status: string;
    };
    deleteClient(id: any): {
        status: string;
    };
    createClient(clientBody: any): {
        status: string;
    };
}
