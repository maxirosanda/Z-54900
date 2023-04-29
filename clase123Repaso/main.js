// 1) let y const 
/*
let nombre = "maxi rosanda";
console.log(nombre);
nombre = "hernan perez";
console.log(nombre);
const PI = 3.14;
console.log(PI);

 if(PI < 4){
    console.log("es mayor a cuatro");
 }else{
    console.log("no es mayor a 4");
 };

// 2 condicionales
 
if(nombre == "maxi rosanda"){
    console.log("usted es usuario");
}else if(nombre == "hernan perez"){
    console.log("usted es usuario");
    console.log("Bienvenido: " + nombre);
}else if(nombre == "beatriz fernandez"){
    console.log("usted es super usuario");
}else{
    console.log("usted no es usuario");
};


switch(nombre){
    case "maxi rosanda":
        console.log("usted es usuario");
        break;
    case "hernan perez":
        console.log("usted es usuario");
        console.log("Bienvenido: " + nombre);
        break;
    case "beatriz fernandez":
        console.log("usted es super usuario");
        break
    default:
        console.log("usted no es usuario");
        break
};
*/
//3 for ,while y do while
/*
for(let i = 1; i<=20; i++){
    console.log(i);
};
*/

const mensajeDescuento = (precioProducto) =>{
    if(precioProducto <= 1000){
        return "producto con descuento especial"
    }else{
        return "no tiene descuento"
    }
}

let nombreProducto = prompt("ingrese un producto y si quiere salir usar esc").toUpperCase();
while(nombreProducto != "ESC"){
    
    let precioProducto = parseFloat(prompt( "ingrese precio del producto"));
    let stockProducto = parseInt(prompt("ingrese stock del producto"));
    alert(mensajeDescuento(precioProducto))
    alert("el producto es: " + nombreProducto + " su precio es: " + precioProducto + "$ y tiene un stock de: " + stockProducto);
    nombreProducto = prompt("ingrese un producto y si quiere salir usar esc").toUpperCase();
};

/*
let nombreAlumno
do{
    nombreAlumno = prompt("Ingrese nombre de alumno").toLowerCase()
    if(nombreAlumno != "esc"){
        alert(nombreAlumno)
    }else{
        alert("chau")
    }
    
}while(nombreAlumno != "esc");
*/