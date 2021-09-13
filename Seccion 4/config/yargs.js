const argv = require('yargs')
            .option('n',{
                alias: 'numero', 
                type: 'number', 
                demandOption: true,
                describe: 'Es el número base para calcular la multiplicación'
            })
            .check((argv, options) => {
                if ( isNaN(argv.n)){
                    throw 'Error: Solo se pueden ingresar números'
                }
                return true;
            })
            .option('l', {
                alias: 'listar', 
                type: 'boolean',
                default: false,
                describe: 'Listar los valores de la tabla de multiplicar en consola'  
            })
            .option('h',{
                alias: 'limite', 
                type: 'number',
                default: 10,
                describe: 'limite numérico hasta el que se va a calcular'
            })
            .argv;

module.exports = argv;