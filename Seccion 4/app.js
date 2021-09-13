const {crearFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
//console.log(process.argv);
//console.log(argv);
//console.log('number: yargs', argv.n);
//console.log('number: yargs', argv.number);
//const [ , , arg3 = 'number=5'] = process.argv;
//const [ , number] = arg3.split('=');
//console.log( number );

crearFile ( argv.n, argv.l )
    .then(crearFile => console.log(crearFile.rainbow,`Promise response:`.magenta, `Created`.green))
    .catch(err => console.log(err, 'Failed to create'.red));

    //fs.writeFile( `tabla-${number}.txt`, salida, (err) => {
//if (err) throw err;
//    console.log(`archivo tabla-${number}.txt creado`);
//})