// Se importa la clase Calculadora desde el archivo calculadora.js
import Calculadora from './calculadora.js';
// Crea la instancia de la clase Calculadora
const calculadora = new Calculadora();

// Muestra por consola la multiplicacion y la division 
console.log(calculadora.multiplicar(5, 5));
console.log(calculadora.dividir(20, 4));
console.log(calculadora.dividir(7, 0));
