/*
const titulo = document.getElementById("titulo")
const caja = document.getElementsByClassName("caja")
const div = document.getElementsByTagName("div")
*/

//const titulo = document.querySelector("#titulo")
//const cajas = document.querySelectorAll(".caja")
//const div = document.querySelectorAll("div")
//const cajaH2 = document.querySelector(".caja h2")

/*
const mensaje = prompt("ingrese un mensaje")
titulo.innerText = mensaje
const nombre = prompt("ingrese su mombre")
cajas[0].innerHTML = `<h3 id="saludo" class="row">Hola ${nombre} </h3>
                     <p>kjfogidsgjsaoi dvjfsdg dfjkvdspiofj </p>
                     <button>Enviar</button>`
titulo.className = "title"
cajas[0].classList.add("tarjeta") // agregar clases css sin borrar las anteriores
cajas[0].classList.remove("caja") //remueve una clase css en particular

*/
/*
for(const caja of cajas){
    caja.classList.add("hola")
}
*/

const productos = [
    {
        id:1,
        nombre:"Procesador amd 5400",
        precio:120000,
        stock:4,
        imagen: "https://i.ibb.co/CQcgNgN/procesador2.jpg"
    },
    {
        id:2,
        nombre:"Procesador amd 5500",
        precio:150000,
        stock:5,
        imagen:"https://i.ibb.co/hVT6S0V/procesador1.jpg"
    },
    {
        id:3,
        nombre:"cocina",
        precio:180000,
        stock:10
    },
    {
        id:4,
        nombre:"computadora",
        precio:320000,
        stock:6
    },
    {
        id:5,
        nombre:"Microfono",
        precio:30000,
        stock:6
    }
]

const contenedorProductos = document.querySelector("#contenedorProductos")
productos.forEach((producto)=>{
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"
    tarjetaProducto.id = `producto${producto.id}`
    tarjetaProducto.innerHTML = `<img src="${producto.imagen}">
                                <h3>${producto.nombre}</h3>
                                <span>Precio: ${producto.precio} $</span>
                                <span>Stock: ${producto.stock} $</span>
                                <button>Comprar</button>
                                `
    contenedorProductos.append(tarjetaProducto)
})

const productoEliminar = document.querySelector("#producto1")
productoEliminar.remove()
