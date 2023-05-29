//EJERCICIOS CONDICIONALES JS

// EJERCICIO # 1:

/*console.log("EJERCICIO # 1");

let number1 = 4;
let number2 = 2;

if (number1 > number2){
    console.log("El primer número es mayor que el segundo");
}else{
    console.log("El segundo número es mayor que el primero");
}

//EJERCICIO # 2:

console.log("EJERCICIO # 2");

let number3 = 4;
let number4 = 4;

if (number3 == number4){
    console.log("Los números ingresados son iguales");
}else{
    console.log("Los números ingresados son diferentes");
}

//EJERCICIO # 3:

console.log("EJERCICIO # 3");

let number5 = 4;
let number6 = 4;

if(number5 > number6){
    console.log("El primer número es mayor que el segundo");
}else if(number6 > number5){
    console.log("El segundo número es mayor que el primero");
}else{
    console.log("Los números son iguales");
}

//EJERCICIO # 4:

console.log("EJERCICIO # 4");

let number7 = 20;
let number8 = 20;
let number9 = 5;

if((number8 > number7) && (number9 > number7)){
    console.log("El primer número es el mas chico");
}else if((number7 > number8) && (number9 > number8)){
    console.log("El segundo número es el mas chico");
}else if((number7 > number9) && (number8 > number9)){
    console.log("El tercer número es el más chico");
}else{
    console.log("Hay números iguales")
}

//EJERCICIO # 5:

console.log("EJERCICIO # 5");

let personOne = {
    firstName : "Juanito",
    lastName : "Peréz",
    age : "30",
    totalHeight : "180"
}

let personTwo = {
    firstName: "Pepito",
    lastName : "López",
    age : "20",
    totalHeight : "170"
}

if(personOne.age > personTwo.age){
    console.log(`${personOne.firstName} es mayor que ${personTwo.firstName}`)
}else{
    console.log(`${personTwo.firstName} es mayor que ${personOne.firstName}`)
}

if(personOne.totalHeight > personTwo.totalHeight){
    console.log(`${personOne.firstName} es más alto que ${personTwo.firstName}`)
}else{
    console.log(`${personTwo.firstName} es alto que ${personOne.firstName}`)
}

//EJERCICIO # 6:

console.log("EJERCICIO # 6");

let personThree = {
    firstName : prompt("Ingrese su nombre"),
    age : prompt("Ingrese su edad"),
    totalHeight : prompt("Ingrese su estatura en cm"),
    visionEvaluation : prompt("Ingrese su nivel de visión (0-10)")
}

if((personThree.age >= 18) && (personThree.totalHeight >= 150) && (personThree.visionEvaluation >= 8)){
    console.log("Usted está habilitado para conducir, felicidades.");
}else{
    console.log("Usted no puede conducir, lo sentimos.");
}

//EJERCICIO # 7:

console.log("EJERCICIO # 7");

let myName = "jose";
let personFour = prompt("Ingrese su nombre");
let ticket = prompt("¿Posee entrada? (si/no/s/n)");
let ticketType = prompt("Tipo de pase (vip/normal/ninguno)");
let buyTicket = "";
let moneyPay = "";

if((personFour == "jose") || (ticket == "si") || (ticket == "s") || (ticketType == "vip") || (ticketType == "normal")) {
    console.log("Felicidades. Puede ingresar");
}else if((myName != "jose") || (ticket == "no") || (ticket == "n") || (ticketType == "ninguno")){
    buyTicket = prompt("Lo sentimos. Usted no puede ingresar. ¿Desea comprar un ticket? (si/no)");
    if(buyTicket == "si"){
        moneyPay = prompt("Ingrese $1.000 USD");
        if(moneyPay == "1000"){
            console.log("Bienvenido/a");
        }else{
            console.log("Hasta luego");
        } 
    }else{
        console.log("Hasta luego");
}}
else{
    console.log("Ha ingresado un valor incorrecto. Por favor vuelva a intentarlo");
}



//EJERCICIO # 8:

console.log("EJERCICIO # 8");

let numeroIncognita = "5";
var counter = "";
let numeroIngresado = prompt("Ingrese un número al azar del 1 al 10");
let numeroIngresado2 = "";
let numeroIngresado3 = "";

if((numeroIngresado != numeroIncognita) && (counter < 3)){
    counter = 2;
    numeroIngresado2 = prompt("Ingrese nuevamente un número");
}else if((numeroIngresado2 != numeroIncognita) && (counter < 3)){
    counter = 3;
    numeroIngresado3 = prompt("Ingrese nuevamente un número");
}else if((numeroIngresado3 != numeroIncognita) && (counter < 3)){
    console.log("Lo sentimos. No ha adivinado el número");
}else{
    console.log("Felicidades. Ha adivinado el número");
}

// EJERCICIO # 9:

console.log("EJERCICIO # 9");

let edad = prompt("Ingrese su edad");
if((edad > 0) && (edad <= 12)){
    console.log("Usted es un infante")
}else if((edad > 12) && (edad <= 18)){
    console.log("Usted es un adolescente");
}else if((edad > 18) && (edad <= 45)){
    console.log("Usted es un joven mayor");
}else if((edad > 45) && (edad <= 100)){
    console.log("Usted es un anciado");
}else{
    console.log("¿Realmente tiene esa edad?");
}

// EJERCICIO # 10:

console.log("EJERCICIO # 10");

let playerOne = prompt("(jugador 1) ingrese su nombre");
let playerTwo = prompt("(jugador 2) ingrese su nombre");
let opt1 = "PIEDRA";
let opt2 = "PAPEL";
let opt3 = "TIJERAS";
let optPlayerOne = prompt(`${playerOne} ingrese una Opción: PIEDRA, PAPEL O TIJERAS`);
let optPlayerTwo = prompt(`${playerTwo} ingrese una Opción: PIEDRA, PAPEL O TIJERAS`);

if((optPlayerOne == "PIEDRA") && (optPlayerTwo == "TIJERAS") || (optPlayerOne == "TIJERAS") && (optPlayerTwo == "PAPEL")){
    console.log(`Felicidades, ${playerOne} ha ganado`);
}else if((optPlayerTwo == "PIEDRA") && (optPlayerOne == "TIJERAS") || (optPlayerTwo == "TIJERAS") && (optPlayerOne == "PAPEL")){
    console.log(`Felicidades, ${playerTwo} ha ganado`);
}else if((optPlayerOne != "PIEDRA") && (optPlayerOne != "PAPEL") && (optPlayerOne != "TIJERAS")){
    console.log(`${playerOne} está haciendo trampas`);
}else if((optPlayerTwo != "PIEDRA") && (optPlayerTwo != "PAPEL") && (optPlayerTwo != "TIJERAS")){
    console.log(`${playerOne} está haciendo trampas`);
}else{
    console.log("Ha sido empate");
}

// EJERCICIO # 11:

console.log("EJERCICIO # 11");

let color = prompt("Ingrese un color");

switch(color){
    case "Blanco": console.log("Falta de color");
    break;

    case "Negro": console.log("Falta de color");
    break;

    case "Verde": console.log("El color de la naturaleza");
    break;

    case "Azul": console.log("El color del agua");
    break;

    case "Amarillo": console.log("El color del sol");
    break;

    case "Rojo": console.log("El color del fuego");
    break;

    case "Marrón": console.log("El color de la tierra");
    break;

    default: console.log("Excelente elección. No lo teníamos pensado");
    break;
}

// EJERCICIO # 12:

console.log("EJERCICIO # 12");

let operationChoose = prompt("¿Qué operación quiere realizar? (SUMA/RESTA/MULTIPLICACIÓN/DIVISIÓN)");
let firstValue = Number(prompt("Ingrese el primer número de su operación"));
let secondValue = Number(prompt("Ingrese el segundo número de su operación"));
let result = "";

if(operationChoose == "SUMA"){
    result = firstValue + secondValue;
    console.log(`El resultado de su operación es: ${result}`);
}else if(operationChoose == "RESTA"){
    result = firstValue - secondValue;
    console.log(`El resultado de su operación es: ${result}`);
}else if(operationChoose == "MULTIPLICACIÓN"){
    result = firstValue * secondValue;
    console.log(`El resultado de su operación es: ${result}`);
}else if((operationChoose == "DIVISIÓN") && (secondValue !=0)){
    result = firstValue / secondValue;
    console.log(`El resultado de su operación es: ${result}`);
}else{
    console.log("Por favor ingrese un valor correcto");
}*/

// EJERCICIO # 13:

console.log("EJERCICIO # 13");

let firstName = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");
let dniNumber = prompt("Ingrese su DNI");
let confirmation = prompt(`Confirma (S/N) que tus datos están correctos: Primer Nombre: ${firstName} / Apellido: ${lastName} / DNI: ${dniNumber}`);

if((confirmation == "s") || (confirmation == "S") || (confirmation == "si") || (confirmation == "SI")){
    let citizen = {
        givenName: firstName,
        givenLastName: lastName,
        givenDniNumber: dniNumber
    }
    console.table(citizen);
    console.log("Felicidades, se ha registrado con éxito")
}else{
    console.log("vuelva a intentarlo en 1 mes");
}



