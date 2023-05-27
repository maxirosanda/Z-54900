// Objeto Math

const numeros = [23,54,67,87,45,2342,23]

console.log(Math.E)
console.log(Math.PI)
console.log(Math.max(...numeros))
console.log(Math.min(...numeros))
console.log(Math.ceil(3.1)) // redondea al numero mayor mas cercano
console.log(Math.floor(3.99)) // redondea al numero menor mas cercano
console.log(Math.round(3.5)) //redondea al numero mas cercano
console.log(Math.sqrt(64)) // te calcula la raiz cuadrada
console.log(Math.random()) // numero aleatorio de 0 a 1
console.log(Math.round(Math.random() * 280 + 120)) // va de 120 a 400 incluyendo los dos

// Clase Date
const fechaActual = new Date()
console.log(fechaActual)
const fechaNacimiento = new Date(1987,6,18,06,25,00)
console.log(fechaNacimiento)
console.log(fechaNacimiento.getDate())
console.log(fechaNacimiento.getMonth())
console.log(fechaNacimiento.getFullYear())
console.log(fechaNacimiento.getDay())
console.log(fechaNacimiento.getHours())
console.log(fechaNacimiento.getMinutes())
console.log(fechaNacimiento.toLocaleDateString())
console.log(fechaNacimiento.toLocaleString())
const tiempo = fechaActual - fechaNacimiento
console.log(tiempo/1000/60/60/24/365)



