require('colors');
const {mostrarMenu} = require('./helpers/mensajes');
const {pause} = require('./helpers/mensajes');
console.clear();
const main = async() =>{

    let opt = '';

    do {
        opt = await mostrarMenu();
        console.log({opt: opt});
        await pause();
    } while ( opt !== '0')

}

main();