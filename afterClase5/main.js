/*
class Producto {
    constructor(nombre,descripcion,precio,stock){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.ivaAplicado = false;
    };
    aumento(porcenteje){
        this.precio = this.precio + this.precio * porcenteje
    };
    iva(){
        this.precio = this.precio + this.precio * 0.21;
        this.ivaAplicado = true;
    };
};
let continuar = true
while(continuar){
    const nombreProducto = prompt("ingrese nombre del producto");
    const descripcionProducto = prompt("ingrese descripcion del producto");
    const precioProducto = parseFloat(prompt("ingrese precio del producto"));
    const stockProducto = parseInt(prompt("ingrese stock del producto"));
    const producto = new Producto(
        nombreProducto,
        descripcionProducto,
        precioProducto,
        stockProducto
    );
    alert("Nombre: " + producto.nombre + " Descripcion: " + producto.descripcion + " Precio: " + producto.precio + " $ Stock: " + producto.stock);
    const iva = confirm("quiere aplicar el iva")
    if( iva == true){
        producto.iva();
        alert("Nombre: " + producto.nombre + " Descripcion: " + producto.descripcion + " Precio: " + producto.precio + " $ Stock: " + producto.stock);
    };
    continuar = confirm("Quiero seguir cargando productos");
};
*/
/*
class Item {
    constructor(nombre,descripcion,precio,cantidad){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    };
    aumento(porcenteje){
        this.precio = this.precio + this.precio * porcenteje
    };
};
let continuar = true
while(continuar){
    const nombreItem = prompt("ingrese nombre del item");
    const descripcionItem = prompt("ingrese descripcion del item");
    const precioItem = parseFloat(prompt("ingrese precio del item"));
    const cantidadItem = parseInt(prompt("ingrese cantidad del item"));
    const item = new Item(
        nombreItem,
        descripcionItem,
        precioItem,
        cantidadItem
    );
    alert("Nombre: " + item.nombre + " Descripcion: " + item.descripcion + " Precio: " + item.precio + " $ Cantidad: " + item.cantidad);
    const aumento = confirm("quiere aplicar un aumento")
    if( aumento == true){
        const aumentoItem = parseFloat(prompt("cuanto quiere aumentar?")) 
        item.aumento(aumentoItem)
        alert("Nombre: " + item.nombre + " Descripcion: " + item.descripcion + " Precio: " + item.precio + " $ Cantidad: " + item.cantidad);
    };
    continuar = confirm("Quiero seguir cargando items");
};
*/
class Alumno {
    constructor(nombre,apellido,dni,promedio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.promedio = promedio;
    };
};
let continuar = true
while(continuar){
    const nombreAlumno = prompt("ingrese el nombre del alumno");
    const apellidoAlumno = prompt("ingrese el apellido del alumno");
    const dniAlumno = parseFloat(prompt("ingrese el DNI del alumno"));
    const promedioAlumno = parseInt(prompt("ingrese el promedio del alumno"));
    const alumno = new Alumno(
        nombreAlumno,
        apellidoAlumno,
        dniAlumno,
        promedioAlumno
    );
    alert("Nombre: " + alumno.nombre + " Apellido: " + alumno.apellido + " DNI: " + alumno.dni + "  Promedio: " + alumno.promedio);
    const modificarPromedio = confirm("quiere modificar el promedio");
    if( modificarPromedio  == true){
        const nuevoPromedio = parseFloat(prompt("cual es el nuevo promedio?"));
        alumno.promedio = nuevoPromedio
        alert("Nombre: " + alumno.nombre + " Apellido: " + alumno.apellido + " DNI: " + alumno.dni + "  Promedio: " + alumno.promedio);
    };
    continuar = confirm("Quiero seguir cargando alumnos");
};