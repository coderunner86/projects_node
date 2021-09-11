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
const salarios = [
    {
        id:1 ,
        salario:1000
    },
    {
        id:2,
        salario: 2000
    },
    {
        id:3,
        salario: 3000
    }
];
const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {

    
        const empleado = empleados.find(e=>e.id===id)?.nombre;
         ( empleado ) 
         ? resolve (empleado)
         : reject(`No existe empleado con id ${id}`); 
        
    });

    return promesa;
}

const getSalario = (id) => {    
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s=>s.id ===id)?.salario;
        (salario)
        ?resolve(salario)
        :reject(`No existe salario con id ${id}`);
    });
    return promesa;
}


const id = 2;
getEmpleado(id)
.then(empleado => console.log(empleado));

getSalario(id)
.then(salario => console.log(salario));
