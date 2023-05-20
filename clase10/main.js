const btnClick = document.querySelector("#btnClick")

//Opcion 1
/*
btnClick.addEventListener("keyup",()=>{
    console.log("keyup")
})

const dato = document.querySelector("#dato")
dato.addEventListener("input",()=>{
    console.log(dato.value)
})
*/
//Opcion 2
/*
btnClick.onclick = () =>{
    console.log("click")
}
*/

//formulario
const productos = []
const crearProducto = document.querySelector("#crearProducto")
crearProducto.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nombre = e.target.children["nombre"].value
    const precio = e.target.children["precio"].value
    const producto = {nombre,precio}
    productos.push(producto)
    console.log(productos)
    crearProducto.reset()
})
