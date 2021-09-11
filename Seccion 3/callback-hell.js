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

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find(e=>e.id===id)
    if (empleado) {
        callback(null, empleado);
    } else {
        callback( `Empleado con id ${id} no existe`);
    }
}


const getSalario = (id, callback) =>{
    const salario = salarios.find(s=>s.id===id)
    if(salario){
        callback(null, salario);
    } else {
        callback(`salario con id ${id} no existe`);
    }
};

//const info = () => {getEmpleado(1), getSalario(1)};

getEmpleado(2,(err, empleado)=>{

    if (err){
        console.log('ERROR!');
        return console.log(err);
    } 
        console.log('Empleado existe!');
        console.log(empleado);
    
})
getSalario (2, (err, salario)=>{
    if (err){
        console.log('ERROR!');
        return console.log(err);
    }
        console.log('Salario EXISTE!');
        return console.log(salario);
})
//console.log(getEmpleado(1));
//console.log(getSalario(1));
//console.log(info(1));