// 4.1 Las condicionales

/**
 *  Invitacion a una fiesta
 * 
 * Si eres mayor de edad y menor de 65 years puedes
 * venir a la fiesta
 * 
 */

// let persona = "Juan Alexis"
// let edad = 16

// if (edad>18 && edad<65) {
//     console.log(`${persona} puedes venir a la fiesta`)
// }

// 4.2 If Else
/**
 *  Invitacion a una fiesta
 * 
 * Si eres mayor de edad y menor de 65 years puedes
 * venir a la fiesta
 * Sino por favor quedate en casa
 */
// let persona = "Juan Alexis"
// let edad = 16

// if (edad>18 && edad<65) {
//     console.log(`${persona} puedes venir a la fiesta`)
// } else{
//     console.log(`${persona} por favor quedate en casa`)
// }


// 4.3 If Else If

/**
 *  Invitacion a una fiesta
 * 
 * Si eres mayor de edad y menor de 65 years puedes
 * venir a la fiesta
 * Sino por favor quedate en casa
 * Sino, si tienes permiso firmado de tus padres, puedes venir
 */

// let persona = "Juan Alexis"
// let edad = 80
// let permiso = true

// if (edad>18 && edad<65) {
//     console.log(`${persona} puedes venir a la fiesta`)
// } 
// else if (permiso === true && edad <18){
//     console.log(`Puedes venir, tienes permiso`)
// }
// else {
//     console.log(`${persona} por favor quedate en casa`)
// }

// if
// if else
// if else if

// 4.4 Switch

/**
 * Ejercicio personaje de Dragon ball eres
 * 
 * Que personaje de dragon ball Z eres?
 * 
 * Si eres fuerte y comelon eres Goku
 * Si eres veloz y egoista eres Vegeta
 * Si eres little y debil eres krilin
 * Si eres travieso y jugueton eres Trunks
 * Si no eres ninguno, eres una sabandija.
 */

// let personalidad = "little y debil"
// if (personalidad === "Fuerte y comelon") {
//     console.log("Eres Goku")
// } else if(personalidad === "Veloz y egoista"){
//     console.log("Eres Vegeta")
// } else if(personalidad === "little y debil"){
//     console.log("Eres Krilin")
// } else if (personalidad === "travieso y jugueton"){
//     console.log("Eres Trunks")
// } else {
//     console.log("Eres una sabandija")
// }

// let personalidad = "little y debil"

// switch(personalidad){
//     case "Fuerte y comelon":
//         console.log("Eres Goku")
//         break
//     case "Veloz y egoista":
//         console.log("Eres Vegeta")
//         break
//     case "little y debil":
//         console.log("Eres Krilin")
//         break
//     case "Travieso y jugueton":
//         console.log("Eres Trunks")
//         break
//     default:
//         console.log("Eres una sabandija!")
// }




// 4.5 Ciclo for
/**
  * Ciclos 
  * Bucles o Loops
  */


// for
// for (let i =  0;i < 10; i++){
//     console.log(i)
// }


// 4.6 Ciclo con For Ejercicio

// Dado un texto deseamos imprimir su contenido letra por letra
// Ejemplo "CristianCalderon"

// let texto = "CristianCalderon"

// for(let i = 0; i < texto.length; i++){
//     console.log(texto[i])
// }


// 4.7 Ciclo While

// Mientras = while
// Regalar juguetes

let juguetes = 10 

while(juguetes>0){
    juguetes--
    console.log(`Regalamos un juguete. Nos quedan ${juguetes}`)
}























