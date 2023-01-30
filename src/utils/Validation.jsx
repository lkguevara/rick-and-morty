import React from 'react'

const Validation = (userData) => {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /\d/;

    // validación de username
    if (!userData.email) {
        errors.email = 'El email es obligatorio';
    } else if (!regexEmail.test(userData.email)) {
        errors.email = 'El email no es válido';
    } else if (userData.email.length > 35) {
        errors.email = 'El email no puede tener más de 30 caracteres';
    }

    // validación de password
    if (!userData.password) {
        errors.password = 'La contraseña es obligatoria';
    } else if (!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos un número';
    } else if (userData.password.length < 6 && userData.password.length > 10) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    }

    return errors;
}

export default Validation