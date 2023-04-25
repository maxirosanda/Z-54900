/*
let nombre = prompt("Ingrese un nombre (si quiere salir escriba esc")
if(nombre != "esc"){
    let  apellido = prompt("ingrese un apellido")
    let dni = prompt("Ingrese DNI")
    console.log("Nombre: " + nombre + " Apellido: " + apellido + " DNI: " + dni)
}
while(nombre != "esc"){
    
    nombre = prompt("Ingrese un nombre (si quiere salir escriba esc")
    if(nombre != "esc"){
        apellido = prompt("ingrese un apellido")
        let dni = prompt("Ingrese DNI")
        console.log("Nombre: " + nombre + " Apellido: " + apellido + " DNI: " + dni)
    }
   
}
*/


let nombre = prompt("Ingrese un nombre (si quiere salir escriba esc")
let apellido
let dni
let nota
let notaTotalAlumnos = 0
let contador = 0
do{
    if(nombre != "esc"){
        apellido = prompt("ingrese un apellido")
        dni = prompt("Ingrese DNI")
        nota = parseFloat(prompt("Ingrese Nota")) 

        console.log("Nombre: " + nombre + " Apellido: " + apellido + " DNI: " + dni + " Nota: " + nota)
        contador = contador + 1
        notaTotalAlumnos = notaTotalAlumnos + nota
    }
    nombre = prompt("Ingrese un nombre (si quiere salir escriba esc")

}while(nombre != "esc")
notaTotalAlumnos = notaTotalAlumnos / contador
alert("el promedio general del curso es: " + notaTotalAlumnos)

/*
let valor = ["maxi","hernan","maria","jose","fede","belen","flavia","sebas","hector"]
console.log(valor[2]) //valor por su posicion (arranca en 0)
console.log(valor.length) //cantidad de valores
for(let i= 0; i < valor.length;i++){
    console.log(valor[i])
}
*/



