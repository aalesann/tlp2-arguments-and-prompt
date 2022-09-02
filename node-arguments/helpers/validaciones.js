// Función para validar la base y el limite recibidos son valores numéricos y mayores a cero
const validarArgumentos = (base, limite) => {
    if (!Number(base)) {
        throw new Error(`La base no es un número. Valor recibido: ${base || 'No hay valor'}`);
    }

    if (!Number(limite)) {
        throw new Error(`El limite no es un número. Valor recibido: ${limite || 'ninguno'}`);
    }
    
    if(Number(limite) < 0) {
        throw new Error(`El limite no puede ser menor a cero, valor recibido: ${limite}`);
    }
};

module.exports = {
    validarArgumentos
};