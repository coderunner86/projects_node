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

    borrarTarea( id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }
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
    listarPendientesCompletadas(completadas = true){
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
                    console.log(`${contador.toString().green} ${desc} :: ${completadoEn.green}`);
                }
            } else{
                if(!completadoEn){
                    contador +=1;
                    console.log(`${contador.toString().green} ${desc} ${estado}`);
                }
            }
            
        });
    }
    toggleCompletadas( ids = []){ 
        ids.forEach( id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                    tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArray.forEach(tarea =>{
            if (!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;