const { multiplicar } = require('./helpers/operaciones');


// Se desestructura obviando los dos primeros parámetros
const [, , ...args] = process.argv;

// Se utiliza map para recorrer los argumentos y obtener su valor numérico
const arguments = args.map(arg => arg.split('=')[1]); // Se utiliza split para obtener el valor numérico

// Se desestructuran los valores numéricos obtenidos
const [base, limite] = arguments;

try {
    console.clear();
    const resultado = multiplicar(base, limite);
    console.log(resultado);
} catch (error) {
    console.log(error.message);
}


