function multiplicar (base, limite) {    
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};



module.exports = multiplicar;
