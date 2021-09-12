const fs = require('fs');
const crearFile = ( number ) => {
    return new Promise((resolve, reject) => {
        console.log('***********************');
        console.log('Tabla del: ', number);
        console.log('***********************');
        
        let salida = '';
        for (let i = 1; i <11; i++) {
            salida += `${number} x ${i} = ${ number * i}\n`
            //console.log(`${number} x ${i}=`,number*i)    
        }
        (salida)
        ?resolve(salida)
        :reject(`No ha sido posible para el número dado`);
        
        fs.writeFileSync( `./resultados/tabla-${number}.txt`, salida);
        console.log(`El archivo tabla-${number}.txt ha sido creado. Ver carpeta de resultados.`);

    });
}

module.exports = {
    crearFile
}

