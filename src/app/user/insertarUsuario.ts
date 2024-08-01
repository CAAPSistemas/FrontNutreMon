const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:P1312829078Vega_m@localhost:5432/nutremon_db');

const nuevoUsuario = {
    nombre: 'Pablo Velasquez',
    email: 'pvelasquez9078@utm.edu.ec',
    contraseña: 'P1312829078Vega_m'
};

db.none('INSERT INTO usuarios(nombreusuario, email, password, rol) VALUES(${nombreusuario}, ${email}, ${password}, ${rol})', nuevoUsuario)
    .then(() => {
        console.log('Registro insertado con éxito.');
    })
    .catch((error: any) => {
        console.error('Error al insertar el registro:', error);
    })
    .finally(() => {
        pgp.end();
    });
