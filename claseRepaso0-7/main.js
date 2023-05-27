class Producto {
    constructor(nombre,descripcion,precio,stock){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.fechaCreacion = new Date()
        this.fechaActulizacion
        
    }
    aumento(porcentaje){
        this.precio = this.precio + this.precio * porcentaje
        this.fechaActulizacion = new Date()
    }
}
const productos = []
let continuar = true

while(continuar === true){
    const nombre = prompt("ingrese Nombre").toUpperCase()
    const descripcion = prompt("ingrese Descripcion").toUpperCase()
    const precio = parseFloat(prompt("Ingrese precio")) 
    const stock = parseInt(prompt("Ingrese stock")) 
    const producto = new Producto(nombre,descripcion,precio,stock)
    productos.push(producto)
    continuar = confirm("Quiere continuar cargando productos")
}
console.log(productos)
continuar = confirm("Quiere eliminar algun producto")
while(continuar){
    const productoNombreEliminar = prompt("que producto quiere eliminar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombre === productoNombreEliminar)
    if(index != -1){
        productos.splice(index,1)
        alert("Producto eliminado")
    }else{
        alert("No se pudo eliminar el producto por que no existe")
    }
    continuar = confirm("Quiere eliminar algun producto")
}

console.log(productos)
continuar = confirm("Quiere actualizar algun producto")
while(continuar){
    const productoNombreActualizar = prompt("que producto quiere actualizar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombre === productoNombreActualizar)
    if(index != -1){
        const nombre = prompt("ingrese Nombre").toUpperCase()
        const descripcion = prompt("ingrese Descripcion").toUpperCase()
        const precio = parseFloat(prompt("Ingrese precio")) 
        const stock = parseInt(prompt("Ingrese stock"))
        productos[index].nombre = nombre
        productos[index].descripcion = descripcion
        productos[index].precio = precio
        productos[index].stock = stock
        productos[index].fechaActulizacion = new Date()
        alert("Producto actualizado")
    }else{
        alert("No se pudo actualizar el producto por que no existe")
    }
    continuar = confirm("Quiere actualizar algun producto")
}
console.log(productos)

continuar = confirm("Quiere aumentar algun producto")
while(continuar){
    const productoNombreActualizar = prompt("que producto quiere aumentar?").toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombre === productoNombreActualizar)
    if(index != -1){
        const procertajeActualizado = parseFloat(prompt("Ingrese que porcentaje quiere aumentar el producto"))
        productos[index].aumento(procertajeActualizado) 
        alert("Producto eliminado")
    }else{
        alert("No se pudo eliminar el producto por que no existe")
    }
    continuar = confirm("Quiere eliminar algun producto")
}

console.log(productos)

