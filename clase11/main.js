// crear item en el storage
localStorage.setItem("titulo","Computacion Maxi")
localStorage.setItem("numero",1243)
localStorage.setItem("confirmar",true)
localStorage.setItem("numeros",[2321,2313,2323,2323,258])
const producto = {nombre:"heladera",precio:120000}
localStorage.setItem("producto",JSON.stringify(producto))

// traer datos del storage

// getItem con string
const titulo = localStorage.getItem("titulo")
const contendorTitulo = document.querySelector("#contendorTitulo")
contendorTitulo.innerText = titulo

//getItem con number
const numero = parseFloat(localStorage.getItem("numero")) 
//console.log(typeof(numero))

//getItem con boolean
const confirmar = (localStorage.getItem("confirmar") === "true")
//console.log(typeof(confirmar))

//getItem con array (numerico)
const numeros = localStorage.getItem("numeros").split(",")
numeros.forEach((numero,index)=> numeros[index] = parseFloat(numero))

//getItem con objetos
const productoRecupera = JSON.parse(localStorage.getItem("producto")) 
console.log(productoRecupera.nombre)
// eliminar datos del storage

//localStorage.removeItem("producto") //eliminar un item de storage
//localStorage.clear() //borra todo el storage

// propiedad para ver cuantos items tengo en el storage
//console.log(localStorage.length)

