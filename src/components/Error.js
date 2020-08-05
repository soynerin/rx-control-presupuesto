import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensajeError}) => {
    return (
        <p className="alert alert-danger error"> { mensajeError } </p>
    )
}

Error.propTypes = {
    mensajeError: PropTypes.string.isRequired,
}

export default Error
