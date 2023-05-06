"use strict"
const palabras = ["hola","buen dia","padre","pitu","casa","autp","hernan"];
const numeros = [120,300.5,600,230];
const boleanos = [true,false,true,false];
const mixto = ["hola",124,true,"chau"];
const autos =[{nombre:"fiat uno",motor:1.6},{nombre:"corsa",motor:1.4}];
// ver los elementos del array y operar
//console.log(mixto)
//console.log(mixto[2])
//console.log(mixto.length)
//console.log(numeros[0] + numeros[3])

//alert("el numero primero es: " + palabras[0])

/*
for(let i = 0 ; i < palabras.length;i++ ){
    console.log(palabras[i])
}
*/
/*
for(elemento of palabras){
    console.log(elemento)
}
*/
/*
//Metotos
const modelosMotos = ["Yamaha Fz 16","Honda cb190" ,"Kawasaki ninja 300","Honda tornado 250"]
//console.log(modelosMotos)

//1) push (agrega un elemento al final)
modelosMotos.push("Benelli TNT 300")
//console.log(modelosMotos)

//2) unshift (agrega un elemento al principio)
modelosMotos.unshift("Zanella 150cc")
//console.log(modelosMotos)

//3) pop (elimina el ultimo elemento)
modelosMotos.pop()
//console.log(modelosMotos)

//4) shift (elimina el primer valor)
modelosMotos.shift()
//console.log(modelosMotos)
//5) splice (elimina una ubicacion en particular)
modelosMotos.splice(2,1)
//console.log(modelosMotos)

//6) concat  Concatenar arrays
const modelosAutos =["Fiat uno","Ford Fiesta","Audi A3"]
const modelosVehiculos = modelosMotos.concat(modelosAutos)
console.log(modelosVehiculos)

// 7) slice (crea una copia pero recotada del array)
const primerasDosMotos = modelosMotos.slice(0,2) //no incluye la ultima posicion
//console.log(primerasDosMotos)
//8) indexOf (busca la posicion en el array de un elemento)
const index = modelosMotos.indexOf("Honda cb190")
//console.log(index)
//9) inclides verificar si un elemento existe
const existe = modelosMotos.includes("Honda cb190")
//console.log(existe)
//10) reverse (invierte el array)
modelosMotos.reverse()
//console.log(modelosMotos)
// 11) join Concatena elementos del array en forma de string (sepadorados por valor)
const modelosMotosLista = modelosMotos.join(" / ")
console.log(modelosMotosLista)
*/
//Ejemplo 1
/*
const nombres = []
let continuar = true
while(continuar){
    const ingreseNombre = prompt("ingrese nombre")
    nombres.push(ingreseNombre)
    continuar = confirm("Quiere seguir ingresando nombres")
}

alert(nombres.join(" / "))

const eliminar = (nombre) =>{
    const index = nombres.indexOf(nombre)
    if(index != -1){
        nombres.splice(index,1)
        alert("usuario eliminado correctamente")
    }else{
        alert("el usuario que trata de eliminar no existe")
    }
    
}

continuar = true
while(continuar){
    const ingreseNombre = prompt("que nombre quiere eliminar")
    eliminar(ingreseNombre)
    continuar = confirm("Quiere seguir borrando nombres")
}

alert(nombres.join(" / "))
*/



const sumarRango = (numero) =>{
    let total = 0
    for (let i = 1; i <=numero; i++) {
        total = total + i
    }
    
    console.log(total) 
}
//sumarRango(10)
//sumarRango(20)
//sumarRango(30)

/*
const verDato = (valor,valor2) =>{

    return valor * valor2
}

console.log(verDato(10,7))
*/

/*
const mayorQue = (valor1)=>{
    return (valor2) => {
       return valor2 > valor1
    }
}

const mayorQueDiez = mayorQue(10)
const mayorQueCinco = mayorQue(5)
console.log(mayorQueDiez(5))
console.log(mayorQueCinco(10))
*/

// funciones que retornan funciones
/*
const generaContador = ()=>{
    let contar = 0
    return {
        getContar:()=>{
            return contar
        },
        setContar:()=>{
            contar++
        }
    }
}

const contadorAlumnos = generaContador()
const contadorProfes = generaContador()
contadorProfes.setContar()
console.log(contadorAlumnos.getContar())
console.log(contadorProfes.getContar())
*/
// funciones que reciben funciones por parametro
/*
const saludo = (fn) =>{
    fn("hola")
}

//saludo(alert)
//saludo(console.log)

const porCadaUno = (arr, fn) => {
    for (const el of arr) {
        fn(el)
    }
}
const precios = [120,300,140,400]
porCadaUno(precios,(valor)=>{console.log(valor)})
porCadaUno(precios,(valor)=>{
    const resultado = valor * 10
    console.log(resultado)
})
*/

//Metodos de busqueda y transformacion

const personas = [
    {
        nombre:"Maxi",
        apellido:"Rosanda",
        curso:"js",
        saldo: 120000
    },
    {
        nombre:"Mateo",
        apellido:"Ruiz",
        curso:"dw",
        saldo:40000
    }
    ,
    {
        nombre:"Eugenia",
        apellido:"Mirenda",
        curso:"js",
        saldo:0
    }
]

//1) forEach (recorrer un array)
/*
personas.forEach((persona)=>{
    console.log("El nombre es: " + persona.nombre + " y el apellido es: " + persona.apellido)
})
*/
//2) find (buscar un elemento del array en particular)
/*
const personaBuscada = prompt("ingrese el nombre de la persona buscada")
const personaEncontrada = personas.find((persona) => persona.nombre == personaBuscada)
alert("el nombre de la persona buscada es : " + personaEncontrada.nombre + " y el apellido es: " + personaEncontrada.apellido)
*/
//3)filter (filtrar)
/*
const curso = prompt("ingrese curso")
const cursoFiltrado = personas.filter((persona)=> persona.curso == curso)
console.log(cursoFiltrado)
*/

//4) some (chequear si existe un elemento)
/*
const personaExiste = prompt("ingrese el nombre de la persona buscada")
const existe = personas.some((persona) => persona.nombre == personaExiste)
if(existe){
    alert("la persona existe en la base de datos")
}else{
    alert("no existe la persona en la base de datos")
}
*/
//6) reduce (sirve para reducir a un solo valor)
/*
const saldoFavorTotal = personas.reduce((acc,persona)=> acc + persona.saldo,0)
console.log(saldoFavorTotal)
*/
//8 findIndex
/*
const personaEliminar = prompt("ingrese el nombre de la persona buscada")
const index = personas.findIndex((persona)=> persona.nombre == personaEliminar)
personas.splice(index,1)
console.log(personas)
*/

//ejemplo 2 array con objetos

class Alumno{
    constructor(nombre,apellido,dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.promedio = 0
        this.notas = []
    }

}

const alumnos = []
let continuar = true
while(continuar){
    const nombre = prompt("ingrese nombre").toUpperCase()
    const apellido = prompt("ingrese Apellido").toUpperCase()
    const DNI = parseInt(prompt("ingrese DNI")) 
    alumnos.push(new Alumno(nombre,apellido,DNI))
    continuar = confirm("Quiere seguir ingresando alumnos")
}


const eliminarAlumno = (dni) => {
    const index = alumnos.findIndex((alumno)=> alumno.dni == dni)
    if(index != -1){
        alumnos.splice(index,1)
    }
}

continuar = confirm("Quiere eliminar un alumn")
while(continuar){
    const alumnoDniEliminar = parseInt(prompt("ingrese dni alumno a eliminar")) 
    eliminarAlumno(alumnoDniEliminar)
    continuar = confirm("Quiere seguir eliminando alumnos")
}


const actualizarAlumno = (dni)=>{
    const index = alumnos.findIndex((alumno)=> alumno.dni == dni)
    if(index != -1){
        const nombre = prompt("ingrese nombre").toUpperCase()
        const apellido = prompt("ingrese Apellido").toUpperCase()
        const DNI = parseInt(prompt("ingrese DNI"))
        alumnos[index] = new Alumno(nombre,apellido,dni)
    }
}
continuar = confirm("Quiere actualizar un alumno")
while(continuar){
    const alumnoDniActualizar = parseInt(prompt("ingrese dni de alumno a actualizar")) 
    actualizarAlumno(alumnoDniActualizar)
    continuar = confirm("Quiere seguir eliminando alumnos")
}
console.log(alumnos)

