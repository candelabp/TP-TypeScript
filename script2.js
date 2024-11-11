"use strict";
//Clases y POO
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
}
const persona = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosslyng']);
persona.proyectarEnCine();
console.log(persona);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cilian Murphy', 'Robert Downey Jr']);
console.log(pelicula2);
//ENCAPSULAMIENTO Y GENÉRICOS
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket} `;
    }
}
let sorteo = new Sorteo(`Sergie Code`);
sorteo.setTicket(7);
console.log(sorteo.sortear());
