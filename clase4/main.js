// funcion sin parametros
/*
function saludar() {
    const nombre = prompt("ingrese su nombre");
    alert("Hola " + nombre);
}
saludar();
saludar();
*/
//funcion con parametros
/*
function sumarTresValores (a,b,c){
    const resultado = a + b + c;
    alert(resultado);
};

sumarTresValores(130,20,10);
sumarTresValores(230,60,12);

function saludarPersona(nombre) {
    alert("Hola " + nombre);
};
saludarPersona("maxi");
saludarPersona("marcelo");
*/
// funcion con parametro y return
/*
function sumarTresValores (a,b,c){
    const resultado = a + b + c;
    return resultado
};

console.log(sumarTresValores(120,130,30))
alert(sumarTresValores(145,56,54))
const resultadoFinal = sumarTresValores(120,23,23) * 5
console.log(resultadoFinal)
*/
// Ejemplo calculadora
/*
function calculadora (numeroUno,numeroDos,operacion){
    
    switch(operacion){
        case "+":
            return  numeroUno + numeroDos;
        case "-":
            return numeroUno - numeroDos;
        case "*":
            return numeroUno * numeroDos;
        case "/":
            return numeroUno / numeroDos;
        default:
            return "Operacion no valida"
        
            
    };
};
let continuar = true;
while(continuar){
    const numeroUno = parseFloat(prompt("ingrese el primer numero"));
    const numeroDos = parseFloat(prompt("ingrese el segundo numero"));
    const operacion = prompt("ingrese operacion");
    const resultado = calculadora(numeroUno,numeroDos,operacion);
    alert(resultado);
    continuar = confirm("quiere seguir operando");
};
*/
// Scope (ambito de las variables)
/*
const variableUno = "valor"

function funcionUno(){
    const variableUno = "valor 2"
    if(true){
        const variableUno = "valor if"
    }
    console.log(variableUno)
}

function funcionDos(){
    const variableUno = "valor 3"
    console.log(variableUno)
}

funcionUno()
*/
/*
const funcionHola = function(nombre){
    return "Hola " + nombre
}
*/
const funcionHola = nombre => "Hola " + nombre

console.log(funcionHola("maxi"))

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 

//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(precioProducto,descuento) + iva(resta(precioProducto,descuento))
console.log(nuevoPrecio)

