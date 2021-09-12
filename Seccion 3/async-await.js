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

   //return promesa;
}

const getSalario = (id) => {    
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s=>s.id ===id)?.salario;
        (salario)
        ?resolve(salario)
        :reject(`No existe salario con id ${id}`);
    });
    //return promesa;
}

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${ empleado } es de: ${ salario }`;
  }catch(error){
     throw error; 
  }
    
}
const id = 2;
getInfoUsuario(id)
    .then( msg =>{
        console.log('GOOD')
        console.log(msg)
    })
        
    .catch(err => {
        console.log('BAD')
        console .log(err)
    });
