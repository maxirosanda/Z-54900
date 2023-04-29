
//Objetos Literales

const alumno1 = {
    nombre:"Juan",
    apellido:"Perez",
    edad:25,
    cantidadMaterias:15
};
const alumno2 = {
    nombre:"Mariano",
    apellido:"PLopez",
    edad:22,
    cantidadMaterias:12
};
//1) ver las propiedades de un objeto
/*
console.log(alumno1.nombre);
console.log(alumno1["nombre"]);
*/

//2) modificar propiedades de un objeto
/*
alumno1.nombre = "Hector";
alumno1["nombre"] = "Jose Maria";
console.log(alumno1.nombre):
*/

//3)Agregar Propiedades
/*
alumno1.direccion = "Siempreviva 765";
console.log(alumno1);
*/

//4) Recorrer un objeto
/*
for(propiedad in alumno1){
    alert(alumno1[propiedad]);
};
alert("Nombre: " + alumno1.nombre + " Apellido: " + alumno1.apellido + " Edad: " + alumno1.edad + " Materias Aprobadas: " + alumno1.cantidadMaterias);
*/

//Funcion Constructora (replazar por clases)
/*
function Profesor(nombre,apellido,materia){
    this.nombre = nombre;
    this.apellido = apellido;
    this.materia = materia;
    this.corregir = function (){
        console.log("el profesor: "+ this.nombre + " procede a corregir")
    }
};

const profe1 = new Profesor("Maxi","rosanda","JS");
const profe2 = new Profesor("Ezequiel","Perez","JS");
console.log(profe1)
*/
/*
const profe3 = new Profesor(
    prompt("ingrese nombre"),
    prompt("ingrese apellido"),
    prompt("Ingrese materia")
)

console.log(profe1);
profe1.corregir()
for(propiedad in profe1){
    console.log(profe1[propiedad])
}
*/

// Clases
/*
class Profesor{
    constructor(nombre,apellido,materia){
        this.nombre = nombre;
        this.apellido = apellido;
        this.materia = materia;
    }
    corregir(){
        console.log("el profesor: "+ this.nombre + " procede a corregir")
    }
}

const profe1 = new Profesor("Maxi","rosanda","JS");
const profe2 = new Profesor("Ezequiel","Perez","JS");

for(propiedades in profe1){
    console.log(profe1[propiedades])
}
console.log(profe1)
const profe3 = new Profesor(2313,3432,324)
console.log(profe3)
console.log(typeof(profe3))
*/

class Producto{
    constructor(nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.vendido = false
    }
    iva(){
        this.precio = this.precio + this.precio * 0.21
    }
    vender(){
        this.vendido = true
    }
    aumento(aumento){
        this.precio = this.precio + this.precio * aumento
    }
}

const producto1 = new Producto("televisor",120000,5)
const producto2 = new Producto("Termo",20000,6)

producto1.iva()
console.log(producto1.precio)
producto1.vender()
console.log(producto1.vendido)
producto1.aumento(0.50)
console.log(producto1.precio)
