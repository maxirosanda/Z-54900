const producto = {
    nombre_producto_elecrtronica: "heladera Philip",
    precio: 15000,
    stock:12,
    descripcion: "jkladsfj djfdsifj jdsfiosajfd jkdfiosjdf",
    ubicacion:"lopez de vega 1500 caba"
}
/*
const nombreProducto = producto.nombre
const precioProducto = producto.precio
const stockProducto = producto.stock

*/

//desestructuracion
const { nombre_producto_elecrtronica:nombre,precio,stock,descripcion,ubicacion} = producto
console.log(nombre)

//desestruccion en parametros

const mostrarProducto = ({nombre_producto_elecrtronica:nombre,precio,stock,descripcion,ubicacion})=>{
    const tarjeta = document.createElement("div")
    tarjeta.className ="tarjeta"
    tarjeta.innerHTML =`
                        <h3>${nombre}</h3>
                        <span>${precio}</span>
    `
    const conteiner = document.querySelector("#conteiner")
    conteiner.append(tarjeta)
}

mostrarProducto(producto)

//desctructuracion de array
const numeros = [123,214,453,234,543]
const [a,b,,d,e] = numeros
console.log(a)

//1) spread en parametros (desparramar)
const maximo = Math.max(...numeros)
console.log(maximo)

//2) spread unir arrays
const numeros2 = [124,556,355,687,443]
const numeros3 = [54,454,565,767]
const numerosTotal = [...numeros,...numeros2,...numeros3]
console.log(numerosTotal)

//3)spread objetos

const productosExtendidio = {
    ...producto,
    fabricante: "philip argentina"
}

