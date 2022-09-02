// Se crea una interfaz para leer los datos por consola
const readline = require('readline').readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Esta función recibe el msj que se desea mostrar y devuelve una promesa
const leerDatosPorConsola = (mensajeParaUsuario) => {
    return new Promise((resolve, reject) => {
        if(typeof mensajeParaUsuario !== 'string') {
            reject("El mensaje debe ser una cadena de texto");
        }
        // Instrucciones
        readline.question(mensajeParaUsuario, base => { 
            resolve(base); // Se resuelve la promesa con el valor ingresado por el usuario
        });      
    })
};



module.exports = {
    leerDatosPorConsola,
    readline
};