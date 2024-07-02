// Se importa la clase Persona desde el archivo personas.js
import Persona from './personas.js';

// Se crea instancias de Personas
const persona1 = new Persona("Ana", 30); 
const persona2 = new Persona("Carlos", 25);

// Se llama al método mostrarInformacion() de la instancia persona1 y muestra los datos
persona1.mostrarInformacion(); 
persona2.mostrarInformacion();