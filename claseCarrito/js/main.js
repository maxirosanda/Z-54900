

fetch("./productos.json").then((res)=>{
    console.log(res)
    return res.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
  console.log(error)
})

/*
const base = async () =>{
   const respuesta = await fetch("./productos.json")
   const productos = await respuesta.json()
   console.log(productos)

}
base()
*/
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
        /*
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            imageUrl: 'https://i.ibb.co/XyvHrn1/pcgamer-3.jpg',
            imageAlt: 'A tall image',
            imageWidth:300,
            imageHeight: 300,
            showConfirmButton: false,
            timer: 1500,
            position: 'center-end',
            color:"blue",
            background:"red",
            backdrop:"rgba(0,0,0,0.9)"
          
          })
          */
          Toastify({
            text: "Producto agregado al carrito",
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            style: {
                background: "blue",
                width:"300px",
                textAlign: "center",
                borderRadius: "5px"
              }
            }).showToast();
            
            
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

Swal.fire({
    title: '¿Es mayor de 18 años?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText:'si, soy mayor de 18 años',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:'No, no soy mayor de 18 años'
  })
  