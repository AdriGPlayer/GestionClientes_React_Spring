import React, { useEffect, useState } from 'react';
import clienteService from '../services/clienteServide';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddClienteComponet() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail]  = useState('');

    const {id} = useParams(); //este hook apunta al parametro de ruta
    const navigate = useNavigate();

    const saveOrUpdateCliente = (e) => {
        e.preventDefault();
        const cliente = { nombre, apellido, email };
        if(id){
            clienteService.updateCliente(id, cliente)
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });

        }
        clienteService.createCliente(cliente)
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(()=>{
        clienteService.getClienteById(id).then((response)=>{
            setNombre(response.data.nombre)
            setApellido(response.data.apellido)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error);
        });
    },[])
    const title = () => {
        if (id){
            return <h2 className='text-center'>Actualizar Cliente</h2>
        }else{
            return <h2 className='text-center'>Agregar Cliente</h2>
        }
    }
    return (
        <div className='row'>
        <div className='col-md-6 offset-md-3'>
            <div className='card'>
                <h2 className='card-header text-center'>{title()}</h2>
                <div className='card-body'>
                    <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nombre</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tu nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={(e)=> setNombre(e.target.value)}
                                />

                                <label className='form-label'>Apellido</label>
                                <input
                                    type='text'
                                    placeholder='Ingresa tu apellido'
                                    name='apellido'
                                    className='form-control'
                                    value={apellido}
                                    onChange={(e)=> setApellido(e.target.value)}
                                />

                                <label className='form-label'>email</label>
                                <input
                                    type='email'
                                    placeholder='Ingresa tu email'
                                    name='email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateCliente(e)}>Guardar</button>
                            &nbsp;&nbsp;
                            <Link to="/clientes" className='btn btn-danger'>Cancelar</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
