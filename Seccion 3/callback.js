

//setTimeout(function(){
 //   console.log("hola!")
//},1000); 
//setTimeout(()=>console.log("hola!"), 2000);

const getUserByID = (id, callback) =>{
    const user = {
        id, 
        nombre: 'Jhesus'
    }
    setTimeout(()=>{
    callback(user)
    }, 1500)
}

getUserByID(11, (user)=>{
    console.log(user);
    console.log(user.id);
    console.log(user.nombre.toUpperCase());
});