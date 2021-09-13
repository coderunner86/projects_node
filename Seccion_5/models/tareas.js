const Tarea = require('./tarea');
class Tareas {
    _listado = {};

    get listadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }
    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea =>{
            this._listado[tarea.id]=tarea;
        })
        
    }
    crearTarea(desc = ''){
            const tarea = new Tarea(desc);
            this._listado[tarea.id] = tarea;

    }
    listadoCompleto(){
        this.listadoArray.forEach((tarea,i) =>{
            //console.log(i);    
            const idx = `${i+1}`.blue;
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ?'Completada'.green
                                : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);
        });
    }
    listarPndientesCompletadas(completadas = true){
        console.log();
        let contador = 0;
        this.listadoArray.forEach(tarea =>{
            
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ?'Completada'.green
                                : 'Pendiente'.red;
            if(completadas){
                if(completadoEn){
                    contador +=1;
                    console.log(`${contador.toString().green} ${desc} :: ${estado}`);
                }
            } else{
                if(!completadoEn){
                    contador +=1;
                    console.log(`${contador.toString().green} ${desc} ${estado}`);
                }
            }
            
        });
    }
}

module.exports = Tareas;