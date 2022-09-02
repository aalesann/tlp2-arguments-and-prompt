const { validarArgumentos } = require('./validaciones');
const { mostrarEncabezado } = require('./mensajes');

// Función que recibe un número y devuelve la tabla de multiplicar
const multiplicar = (base, limite) => {
    validarArgumentos(base, limite); // Se valida la base y el limite
    mostrarEncabezado(base); // Se muestra el encabezado de la tabla
    
    // Se arma la tabla de multiplicar concatenando los resultados con un salto de línea (\n)
    let resultado = '';
    for (let i = 0; i <= limite; i++) {
        resultado += `${base} * ${i} = ${base * i}\n`;
    }

    // Se devuelve la tabla de multiplicar al punto donde se invocó la función
    return resultado;
};




// Se exporta la función multiplicar para poder utilizarla en otro archivo
module.exports = {
    multiplicar
}