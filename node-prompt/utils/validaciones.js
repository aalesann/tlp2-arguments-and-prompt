const validarBase = (base) => {

    if (!Number(base)) {
        throw new Error(`La base no es un número. Valor recibido: ${base || 'Ninguno'}`);
    }

    if (base < 0) {
        throw new Error(`La base no puede ser menor que 0. Valor recibido ${base}`);
    }
};

const validarLimite = (limite) => {
    if (!Number(limite)) {
        throw new Error(`El limite no es un número. Valor recibido: ${limite || 'Ninguno'}`);
    }

    if (limite < 0) {
        throw new Error(`El limite no puede ser menor que 0. Valor recibido ${limite}`);
    }
};


module.exports = {
    validarBase
}
