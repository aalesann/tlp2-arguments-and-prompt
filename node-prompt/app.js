

// Aplicación que recibe dos números y devuelve una tabla de multiplicar
// de la base recibida, desde 1 hasta el límite recibido.
const { mostrarEncabezado } = require('./utils/mensajes');
const multiplicar = require("./utils/operaciones");
const { validarBase, validarLimite } = require("./utils/validaciones");
const { leerDatosPorConsola, readline } = require("./utils/promesas");

console.clear();

// ===================== Obteniendo Argumentos ===========================
// console.log(process.argv);
// const [, , ...arrArgumentos] = process.argv;
// const nuevoArrArgumentos = arrArgumentos.map(arg => arg.split('=')[1]);
// const [base, limite] = nuevoArrArgumentos;

// try {
//     validarBase(base);
//     validarLimite(limite);
//     mostrarEncabezado(base);
//     multiplicar(base, limite);
// } catch (error) {
//     console.log(error.message);
// }

// =======================================================================

//  Leyendo datos por consola
// ====================== Alternativa 1 ========================
// Callbacks Anidados
// readline.question('Ingrese la base: ', base => { // Callback N°1
//     readline.question('Ingrese el limite: ', limite => { // Callback N°2
//         try {
//             // validarBase(base);
//             validarLimite(limite);
//             mostrarEncabezado(base);
//             multiplicar(base, limite);
//             readline.close();
//         } catch (error) {
//             console.log(error.message);
//             readline.close();
//         }
//     })
// });
// ==============================================================

// ==================== Alternativa 2 =====================
// Promesas encadenadas
// leerDatosPorConsola('Ingrese la base: ')
//     .then(base => {
//         validarBase(base);
        
//         leerDatosPorConsola('Ingrese el limite: ')
//             .then(limite => {
//                 validarLimite(limite);
                
//                     mostrarEncabezado(base);
//                     multiplicar(base, limite);

//             })
//             .catch(error => console.log(error.message))
//             .finally(() => readline.close());
//         })
//         .catch(error => console.log(error.message))
// =========================================================

// ========================= Alternativa 3 ==========================
// Función autoinvocada que ejecuta una función asíncrona en su interior
(
    async () => {
        try {
            const base = await leerDatosPorConsola('Ingrese la base: ');
            validarBase(base);

            const limite = await leerDatosPorConsola('Ingrese el limite: ');
            validarLimite(limite);
            
            mostrarEncabezado(base);
            multiplicar(base, limite);
            
            readline.close();
        } catch (error) {
            console.log(error.message);
            return readline.close();
        }
    }
)(); 
// ==============================================================









