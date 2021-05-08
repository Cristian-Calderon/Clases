// 5.1 Sintaxis Basica
// funciones

// // Declaracion de mi funcion saludar
// function saludar (){
//     console.log("Hola, muy buenos dias")
// }
// // Llamado a la funcion saludar
// saludar()

// 5.2. Parametros
// function saludar (nombre){
//     if (typeof nombre==="string"){
//         console.log(`Hola ${nombre} muy buenos dias`)
//     }else{
//         console.log("Escriba un nombre correcto")
//     }
// }

// saludar("Cristian Calderon")


// 5.3. Valores de retorno
// function obtenernombrecompleto(nombre, apellidos){
//     return `${nombre} ${apellidos}`
// }
// console.log(obtenernombrecompleto("Cristian", "Calderon Rojas"))



// 5.4. Funciones de primera clase
// function obtenernombrecompleto (nombre, apellidos){
//     return `${nombre} ${apellidos}`
// }
// let nombrecompleto = obtenernombrecompleto("Cris", "Calderon")
// console.log(nombrecompleto)



// 5.5 Fciones anonimas

// let sumar = function (a, b, c){
// return a + b + c
// }

// let resultado = sumar(2, 4, 5)
// console.log(resultado)

// // Declarando la funcion y ejecutando

// (function(a,b,c){
//     console.log(a+b+c)
// }(10,4,5))


// 5.6. Funciones como constantes
// const saludar = function(nombre){
//     console.log(`Hola ${nombre}`)
// }
// console.log(saludar("Enrique"))



// 5.7 Scope
// Alcance que tiene algunos datos

let nombre = "Alexis"
nombre="Juan"

function saludar(){
    let nombre = "Calderon"
    console.log(`hola ${nombre}`)
}

console.log(nombre)
// saludar()


















