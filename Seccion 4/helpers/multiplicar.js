const { cyan } = require('colors');
const fs = require('fs');
require('colors');
const crearFile = ( number, listar =    false ) => {
    return new Promise((resolve, reject) => {
       
        
        let salida = '';
        for (let i = 1; i <11; i++) {
            salida += `${number} x ${i} = ${ number * i}\n`
            //console.log(`${number} x ${i}=`,number*i)    
        }

        if (listar) {
            console.log('***********************'.green);
            console.log('Tabla del: '.blue, number);
            console.log('***********************'.green);
            (salida)
            ?resolve(salida)
            :reject(`No ha sido posible para el número dado`);
        }
        fs.writeFileSync( `./resultados/tabla-del-${number}.txt`, salida);
        console.log(`El archivo`.cyan, `tabla-del-${number}.txt`.red, `ha sido creado`.cyan, `Ver carpeta de resultados.`.yellow);
    });
}

module.exports = {
    crearFile
}

