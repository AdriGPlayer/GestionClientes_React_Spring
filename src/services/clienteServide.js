import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "http://localhost:4000/api/v1/clientes";
const CLIENTE_SAVE_REST_API_URL = "http://localhost:4000/api/v1/saveCliente";
const CLIENTE_UPDATE_REST_API_URL = "http://localhost:4000/api/v1/updateCliente"
const CLIENTE_DELETE_REST_API_URL = "http://localhost:4000/api/v1/deleteCliente";

class ClienteService {
    getAllClientes() {
        return axios.get(CLIENTE_BASE_REST_API_URL);
    }
    createCliente(cliente) {
        return axios.post(CLIENTE_SAVE_REST_API_URL, cliente);
    }

    getClienteById(id){
        return axios.get(CLIENTE_BASE_REST_API_URL + "/" + id);
    }

    updateCliente(id, cliente){
        return axios.put(CLIENTE_UPDATE_REST_API_URL + "/" + id, cliente);
    }
    deleteCliente(id){
        return axios.delete(CLIENTE_DELETE_REST_API_URL + "/" + id);

    }

}



export default new ClienteService();
