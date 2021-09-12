
const {crearFile} = require('./helpers/multiplicar');
console.clear();
console.log(process.argv);
const [ , , arg3 = 'number=5'] = process.argv;
const [ , number] = arg3.split('=');
console.log( number );

crearFile ( number )
    .then(crearFile => console.log(crearFile,'Promise response: Created'))
    .catch(err => console.log(err, 'Failed to create'));

    //fs.writeFile( `tabla-${number}.txt`, salida, (err) => {
//if (err) throw err;
//    console.log(`archivo tabla-${number}.txt creado`);
//})