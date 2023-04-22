/*
for(let i = 1;i <= 20;i = i + 1){
    console.log("vuelta numero: " + i);
};
*/
/*
const numero = parseInt(prompt("ingrese numero a multiplicar"));
for(let i = 1;i<=10;i++){
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
};
*/
/*
for(let i = 1; i <= 2;i++){
    let nombre = prompt("Ingrese su nombre y apellido");
    alert(nombre + "tiene el turno Numero: " + i);
    console.log(nombre + "tiene el turno Numero: " + i);
};
*/
/*
for(let i = 0;i < 10; i++){

    if(i == 5){
        break
    };
    console.log(i);
};
*/
/*
for(let i = 0;i < 10; i++){

    if(i == 5){
        continue
    };
    console.log(i);
};
*/
/*
let nombre = prompt("ingrese un nombre para la lista (salir con esc)").toUpperCase();
while(nombre != "ESC"){
    console.log(nombre);
    nombre =prompt("vuelva a ingresar un nombre").toUpperCase();
};
*/

/*
let nombre = prompt("ingrese un nombre para la lista (salir con esc)").toUpperCase();
do{
    if(nombre=="ESC"){
        console.log("no a ingresado ningun nombre")
        
    }else{
        console.log(nombre)
    }
    nombre = prompt("ingrese un nombre para la lista (salir con esc)").toUpperCase();
    
}while(nombre != "ESC");
*/

const numeroRepe = parseInt(prompt("Ingrese un numero"))
for(let i = 0;i<numeroRepe;i++){
    console.log("hola")
}