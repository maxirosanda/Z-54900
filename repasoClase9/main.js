const titulo = document.querySelector("#titulo")
const ingresoTitulo = prompt("Ingrese un titulo")
titulo.innerHTML = ingresoTitulo
const portada = document.querySelector("#portada")
const textoPortada = prompt("Ingrese el texto de la portada")
const imagen = "fondoContactos.webp"
portada.innerHTML = `
                    <h2>${textoPortada}</h2>
                    <img src="./multimedia/img/${imagen}">
                    `

const productos = []
let continuar = true
while(continuar){
    const nombre = prompt("Ingrese nombre del Producto")
    const precio = parseFloat(prompt("Ingrese precio del Producto")) 
    productos.push({nombre,precio})
    continuar = confirm("queres cargar otro producto")
}
const contenedorProductos = document.querySelector("#contenedorTarjetas")
productos.forEach((producto)=>{
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
                        <h3>${producto.nombre}</h3>
                        <img src="./multimedia/img/tv-with-wide-screen.jpg">
                        <span>${producto.precio}</span>
                        <button>Carrito</button>
    `
    contenedorProductos.append(tarjeta)



})


