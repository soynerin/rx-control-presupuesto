import React, { useState, Fragment } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if ( cantidad < 1 || isNaN( cantidad )) {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

        // 
    }

    return (
        <Fragment>
            <h2> Presupuesto </h2>

            { 
                error 
                ? <Error mensajeError='El Presupuesto es incorrecto' />
                : null
            }

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={ e => guardarCantidad( parseInt(e.target.value) )}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
}

export default Pregunta
