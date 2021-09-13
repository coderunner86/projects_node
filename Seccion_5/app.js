require("colors");
//const {mostrarMenu} = require('./helpers/mensajes');
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
	inquirerMenu,
	pausa,
	leerInput,
	listadoTareasBorrar,
	confirmar,
	mostrarListadoChecklist,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

//const {pause} = require('./helpers/mensajes');

const main = async () => {
	let opt = "";
	const tareas = new Tareas();
	const tareasDB = leerDB();
	if (tareasDB) {
		tareas.cargarTareasFromArray(tareasDB);
	}
	// await pausa();
	do {
		opt = await inquirerMenu();
		//opt = await mostrarMenu();
		switch (opt) {
			case "1":
				// crear opcion
				const desc = await leerInput("Descripcion: ");
				tareas.crearTarea(desc);
				break;
			case "2":
				tareas.listadoCompleto();
				break;
			case "3":
				tareas.listarPendientesCompletadas(true);
				break;
			case "4":
				tareas.listarPendientesCompletadas(false);
				break;
            case "5":
                const ids =  await mostrarListadoChecklist(tareas.listadoArray);
                tareas.toggleCompletadas(ids);
                break;
			case "6":
				const id = listadoTareasBorrar(tareas.listadoArray);
				if (id !== "0") {
					const ok = await confirmar("¿Esta seguro?");
					if (ok) {
						tareas.borrarTarea(id);
						console.log("Tarea borrada");
					}
				}

				break;
		}

		guardarDB(tareas.listadoArray);

		await pausa();
	} while (opt !== "0");
};

main();
