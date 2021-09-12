
const {crearFile} = require('./helpers/multiplicar');
console.clear();

const number = 9;
crearFile ( number )
    .then(crearFile => console.log(crearFile,'Promise response: Created'))
    .catch(err => console.log(err, 'Failed to create'));

//fs.writeFile( `tabla-${number}.txt`, salida, (err) => {
//if (err) throw err;
//    console.log(`archivo tabla-${number}.txt creado`);
//})