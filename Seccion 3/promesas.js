const empleados = [
    {
        id:1 ,
        nombre: 'Karen'
    },
    {
        id:2 ,
        nombre: 'Linda'
    },
    {
        id:3 ,
        nombre: 'Luisa'
    }
]

const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {

    
        const empleado = empleados.find(e=>e.id===id)?.nombre;
         ( empleado ) 
         ? resolve (empleado)
         : reject(`No existe empleado con id ${id}`); 
        
    });

    return promesa;
}

const id = 2;
getEmpleado(id)
.then(empleado => console.log(empleado));