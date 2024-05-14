import React, { useEffect, useState } from 'react';
import clienteServide from '../services/clienteServide';
import { Link } from 'react-router-dom';

export default function ListaClientesComponente() {
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        listarClientes()

    },[])
   
    

    const deleteCliente = (clienteId) =>{
        clienteServide.deleteCliente(clienteId).then((reponse) =>{
            listarClientes();
        })
    }
    const listarClientes = () =>{
        clienteServide.getAllClientes().then(response =>{
            setClientes(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error)
        })



    }
    return (
        <div className='container'>
            <h2 className='text-center'>Lista de clientes</h2>
            <Link to="/add-cliente" className='btn btn-primary mb-2'>Agregar Cliente</Link>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo Electrónico</th>
                        <th scope="col">Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td><Link className='btn btn-info' to={`/edit-cliente/${cliente.id}`} >Editar</Link>&nbsp;&nbsp;
                            <button className='btn btn-danger' onClick={()=> deleteCliente(cliente.id)}>Eliminar</button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
