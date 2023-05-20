
class Item {
    constructor(nombre,descripcion,precio,cantidad,paniolero,ubicacion){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.cantidad = cantidad
        this.paniolero = paniolero
        this.ubicacion = ubicacion
        this.fechaCreacion = new Date()
        this.fechaActualizacion = new Date()
    }
}
const items = JSON.parse(localStorage.getItem("items")) || []


const crearItem = () => {
    const crearItem = document.querySelector("#crearItem")
    crearItem.addEventListener("submit",(e)=>{
        e.preventDefault()
        const nombre = e.target.children["nombre"].value
        const descripcion = e.target.children["descripcion"].value
        const precio = e.target.children["precio"].value
        const cantidad = e.target.children["cantidad"].value
        const paniolero = e.target.children["paniolero"].value
        const ubicacion = e.target.children["ubicacion"].value
        const item = new Item(nombre,descripcion,precio,cantidad,paniolero,ubicacion)
        items.push(item)
        localStorage.setItem("items",JSON.stringify(items) )
        verItem(item)
        crearItem.reset()
        
    })
} 

const verItem = (item) =>{
    const tablaItems = document.querySelector("#tablaItems")
    const trItem = document.createElement("tr")
    trItem.innerHTML = `
                    <td>${item.nombre}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.precio}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.paniolero}</td>
                    <td>${item.ubicacion}</td>
    `
    tablaItems.append(trItem)
}
const verItems = () =>{

    items.forEach(item => {
        verItem(item)
    })
    
}

verItems()
crearItem()
