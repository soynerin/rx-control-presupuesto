import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';


const { uuid } = require('uuidv4');

const Formulario = ({agregarNuevoGasto, isGastoCreado}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const guardarGasto = e => {
        e.preventDefault();

        // Validar gasto
        if ( cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }        

        guardarError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: uuid()
        }
    
        agregarNuevoGasto(gasto);
        isGastoCreado(true);

        setNombre('');
        setCantidad(0);
    }

    return (
        <div>
            <h2> Ingresa tus gastos </h2>

            { 
                error 
                ? <Error mensajeError='Ambos campos son obligatorios o Presupuesto incorrecto' />
                : null
            }            

            <form
                onSubmit={guardarGasto}
            >
                <div className="campo">
                    <label>Nombre gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value) }
                    />
                </div>

                <div className="campo">
                    <label>Cantidad gasto</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={ e => setCantidad(parseInt( e.target.value ))}
                    />
                </div>

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />
            </form>
        </div>
    )
}

Formulario.propTypes = {
    agregarNuevoGasto: PropTypes.func.isRequired,
    isGastoCreado: PropTypes.func.isRequired,
}

export default Formulario