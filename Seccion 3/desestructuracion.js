const deadpool = {
    nombre : `Wade`,
    apellido : `Winston`,
    poder : `regenración`,
    getNombre () {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    } 
}

// const { nombre, apellido, poder } = deadpool;

function imprimeHeroe (heroe) {

    //const { nombre, apellido, poder } = heroe;
    console.log(nombre, apellido, poder);

}

//console.log(deadpool.getNombre());

const heroes = ['deadpool', 'superman', 'spiderman'];
const [h1, h2, h3] = heroes;
console.log(h1, h3,  h2);