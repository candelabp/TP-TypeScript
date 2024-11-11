"use strict";
// DATOS PRIMITIVOS
let interMiami = 11;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = "Me emocione al verlo al messi";
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ` porque juega messi`;
    }
    if (equipo1 > equipo2)
        console.log(`Gana interMiami ${motivo}`);
    if (equipo1 == equipo2)
        console.log("Empatan");
    if (equipo1 < equipo2)
        console.log("Gana FC DALLAS");
}
jugar(interMiami, fcDallas, juegaMessi);
// ANY
//no usar any
let disney;
disney = "Star wars y Marvel";
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
//ARRAYS
let arregloNumeros = [1, 2, 3, 4, 5, 6];
let arregloTexto = ['HTML', 'CSS', 'JS'];
arregloTexto[0].indexOf('HTML');
//OBJETOS LITERALES
let programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomaMate: true
};
programador = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C#'],
    tomaMate: false
};
console.log(programador);
//TYPE PERSONALIZADO
//  type Programador = {
//     nombre: string;
//     tecnologias: string[],
//     tomaMate: boolean | null
//  }
let programador2 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomaMate: null
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador2);
//CLASES Y POO
