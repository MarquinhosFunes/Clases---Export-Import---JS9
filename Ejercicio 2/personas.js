// Se exporta la clase Persona
export default class Persona{
// Se crea el constructor de la clase Persona en donde se inicializa nombre y edad
    constructor(nombre, edad){
        this.nombre = nombre;    
        this.edad = edad;    
    }
// Se muestrala información de la persona por consola
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}