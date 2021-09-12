
//const { argv } = require('yargs');
const {crearFile} = require('./helpers/multiplicar');
const argv = require('yargs')
            .option('n',{
                alias: 'numero', 
                type: 'number', 
                demandOption: true 
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
                default: false  
            })
            .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
//console.log('number: yargs', argv.n);
//console.log('number: yargs', argv.number);
//const [ , , arg3 = 'number=5'] = process.argv;
//const [ , number] = arg3.split('=');
//console.log( number );

crearFile ( argv.n, argv.l )
    .then(crearFile => console.log(crearFile,'Promise response: Created'))
    .catch(err => console.log(err, 'Failed to create'));

    //fs.writeFile( `tabla-${number}.txt`, salida, (err) => {
//if (err) throw err;
//    console.log(`archivo tabla-${number}.txt creado`);
//})