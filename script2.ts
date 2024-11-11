//Clases y POO

class Pelicula{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];
   
    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`)
    }

    constructor(nombre:string, protagonistas:string[], actores:string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores

    }

}
const persona = new Pelicula('Barbie', ['Barbie','Ken'],['Margot Robbie','Ryan Gosslyng'])
persona.proyectarEnCine()
console.log(persona)
const pelicula2 = new Pelicula('Oppenheimer',['Oppenheimer','Strauss'],['Cilian Murphy','Robert Downey Jr'])
console.log(pelicula2)

//ENCAPSULAMIENTO Y GENÉRICOS

class Sorteo<T>{
    private ticket?: T;
    constructor(private nombre: string){}
    setTicket(ticket:T){
        this.ticket = ticket
    }
    getTicket(){
        return this.ticket;
    }
    public sortear(): string{
        return `Para ${this.nombre} el ticket es ${this.ticket} `
    }
}
let sorteo =  new Sorteo<number>(`Sergie Code`)
sorteo.setTicket(7)
console.log(sorteo.sortear())