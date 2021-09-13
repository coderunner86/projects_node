require('colors');
//const {mostrarMenu} = require('./helpers/mensajes');
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const {inquirerMenu,
     pausa, 
leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

//const {pause} = require('./helpers/mensajes');

const main = async() =>{

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }
   // await pausa();
    do {
        opt = await inquirerMenu();
        //opt = await mostrarMenu();
        switch(opt){
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPndientesCompletadas(true);
                break;
            case '3':
                tareas.listarPndientesCompletadas(false);
                break;
        }

      //  guardarDB(tareas.listadoArray);
  
        await pausa();
    } while ( opt !== '0')

}

main();