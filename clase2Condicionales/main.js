//Ejemplo1 login practica
/*
const edadUsuario = parseInt(prompt("ingrese su edad")); 

if(edadUsuario >= 18){

    console.log("Hola usted puede entrar a la pagina");
    const nombreUsuario = prompt("Ingrese su nombre de usuario");
    
    if(nombreUsuario.toLowerCase() == "maxirosanda"){
        console.log("Hola usted es usuario registrado");
    }else{
        console.log("usuario incorrecto");
    };

}else{
    console.log("Usted es menor de edad, no puede ingresar a la pagina");
};
*/
//Ejemplo 2 calculadora
/*
const numeroA = parseFloat(prompt("ingrese un valor"));
const numeroB = parseFloat(prompt("ingrese otro un valor"));
const operacion = prompt("S:Sumar,M:Multi,D:dividir,R:restar").toLowerCase();

if(operacion == "s"){
    console.log(numeroA + numeroB)
}else if(operacion == "m"){
    console.log(numeroA * numeroB)
}else if(operacion == "d"){
    console.log(numeroA / numeroB)
}else if(operacion == "r"){
    console.log(numeroA - numeroB)
}else{
    console.log("Operacion no valida")
}
*/
//Ejemplo 3 precio menor que
/*
const precio = parseFloat(prompt("ingrese un precio"));

if(precio < 20){
    console.log("el precio es menor a 20");
}else if(precio < 50){
    console.log("el precio es menor a 50");
}else if(precio < 100){
    console.log("el precio es menor a 100");

}else{
    console.log("el precio es mayor o igual a 100");
}
*/
// Ejemplo 4 desigual
/*
const stock = parseFloat(prompt("ingrese el stock del producto"));
console.log(typeof(stock));

if(stock !== 10){
    console.log("el stock no es 10");
};
*/
//ejemplo 5 && y ||
/*
const precio = parseFloat(prompt("ingrese un precio"));

if(precio>=20 && precio <= 50){
    console.log("el valor esta entre 20 y 50 inclusive");
}

if(precio <= 20 || precio >= 50){
    console.log("el numero no esta entre 20 y 50");
}
*/
/*
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
};
*/
//Ejemplo 6 con !
/*
const usuario = null;
console.log(!usuario)

if(!usuario){
    console.log("usuario no registrado");
}
*/
//Ejemplo 7 switch
const numeroA = parseFloat(prompt("ingrese un valor"));
const numeroB = parseFloat(prompt("ingrese otro un valor"));
const operacion = prompt("+:Sumar,*:Multi,/:dividir,-:restar").toLowerCase();

switch(operacion){
    case "+":
        console.log(numeroA + numeroB)
        break
    case "*":
        console.log(numeroA * numeroB)
        break
    case "/":
        console.log(numeroA / numeroB)
        break
    case "-":
        console.log(numeroA - numeroB)
        break
    default:
        console.log("Operacion no valida")
        break

}


