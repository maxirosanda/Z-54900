const productos = [
    {
        id:1,
        nombre: "Batle Royale",
        precio:12000,
        descripcion: "Las llamadas batallas reales son un tipo de partidas en las que una gran cantidad de jugadores participan de manera individual o en grupo y compiten entre sí hasta que sólo uno de ellos queda en pie.",
        stock:2,
        urlImg:"https://i.ibb.co/XyvHrn1/pcgamer-3.jpg"
    },
    {
        id:2,
        nombre: "God of war",
        precio:10000,
        descripcion: "Kratos vuelve a ser padre. Como mentor y protector de Atreus, un hijo determinado a ganarse el respeto de su padre.",
        stock:5,
        urlImg:"https://i.ibb.co/XyvHrn1/pcgamer-3.jpg"
    },
    {
        id:3,
        nombre: "Final fantasy",
        precio:8000,
        descripcion: "Final Fantasy XIV: Endwalker es una nueva y gran expansión que hace que esta gran aventura crezca aún más. Puede que resulte algo abrumador, pero es un lugar que nunca fue tan rico, diverso, detallado y divertido de explorar.",
        stock:4,
        urlImg:"https://i.ibb.co/XyvHrn1/pcgamer-3.jpg"
    },
    {
        id:4,
        nombre: "Crew 2",
        precio:9000,
        descripcion: "¡Llegó la hora de volver al circuito! En esta nueva temporada de The Crew® 2, conocerán a Chris Forsberg Racing, el triple campeón del mundo de Drift, y a",
        stock:8,
        urlImg:"https://i.ibb.co/XyvHrn1/pcgamer-3.jpg"
    },
    {
        id:5,
        nombre: "Crew 2",
        precio:9000,
        descripcion: "¡Llegó la hora de volver al circuito! En esta nueva temporada de The Crew® 2, conocerán a Chris Forsberg Racing, el triple campeón del mundo de Drift, y a",
        stock:8,
        urlImg:"https://i.ibb.co/XyvHrn1/pcgamer-3.jpg"
    }
]

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

const verProducto = ({id,nombre,precio,descripcion,stock,urlImg}) =>{
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas")
    const tarjeta = document.createElement("div")
    tarjeta.className = "tarjeta"
    tarjeta.innerHTML = `
                        <img src="${urlImg}" alt="">
                        <div class="contenido">
                            <h3>${nombre}</h3>
                            <p>${descripcion}</p>
                            <span><b>Precio:</b> ${precio}$</span>
                        </div>
                        <form id="formCarrito${id}">
                        <input name="id" type="hidden" value="${id}">
                        <input name="cantidad" type="number" value="1" min="1" max="${stock}">
                        <button type="submit">Agregar al carrito</button>
                        </form>
                        
    `
    contenedorTarjetas.append(tarjeta)
}

const agregarCarrito = (id) =>{
    const formCarrito = document.querySelector("#formCarrito" + id)
    formCarrito.addEventListener("submit",(e)=>{
        e.preventDefault()
        const cantidad = e.target.children["cantidad"].value
        carrito.push({
            id,
            cantidad
        })
        localStorage.setItem("carrito",JSON.stringify(carrito))
    })
}
const verProductos = () =>{

    productos.forEach(producto =>{
        if(producto.stock !=0){
            verProducto(producto)
            agregarCarrito(producto.id)
        }
        
    })
}

verProductos()