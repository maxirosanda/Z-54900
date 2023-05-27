//const sumar = (a,b) => a + b
/*
const boton = document.querySelector("#btn")
boton.addEventListener("click",()=>{
    console.log("click")
})
*/
//sumar(12,34)

const resultado = ((a,b)=>{
    return a + b
})(12,33)

/*
const temp = parseFloat(prompt("ingrese temperatura")) 
let saludo
if(temp >= 20){
    saludo = "Buenos dias hoy va a estar lindo"
}else{
    saludo = "Buenos dias llevate un buzo!!!"
}
console.log(saludo)
*/

/*
const temp = parseFloat(prompt("ingrese temperatura")) 
const saludo = ((temp)=>{
    if(temp >= 20){
        return  "Buenos dias hoy va a estar lindo"
    }else{
         return "Buenos dias llevate un buzo!!!"
    }
})(temp)
*/
 // 1) Operador ternario
 
const temp = parseFloat(prompt("ingrese temperatura")) 
const saludo = temp >= 20 ? "Buenos dias hoy va a estar lindo" : "Buenos dias llevate un buzo!!!"
console.log(saludo)

/*
const carrito = []
const saludo2 = ((largo)=>{
    if(largo == 0){
        return "carrito vacio"
    }
})(carrito.length)
*/
// 2) Operador logico and

const carrito = []
const saludo2 = carrito.length == 0 && "carrito vacio"
console.log(saludo2)

// 3) operador logico or (falsy(6): 0,null,undefined,false,"",NaN) (truly:cualquier numero menos el cero,cuaquiel string menos el vacio,objeto aunque este vacio y un array aunque este vacio)
const carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
console.log(carrito2)
/*
console.log(!!null)
console.log(!!undefined)
console.log(!!0)
console.log(!!"")
console.log(!!false)
console.log(!!NaN)

console.log(!!434)
console.log(!!"a")
console.log(!!true)
console.log(!!{})
console.log(!![])
*/

// 4) Operador Nullish (toma como falso (2): null ,undefined)
const valor = false

const valorVerdadero = valor ?? "es falso"
console.log(valorVerdadero)


//5) acceso condicional a objetos

const alumno = {
    nombre:"maxi rosanda",
    dni:33080238,
    cursos:{
        js: "aprobado",
        DW:"aprobado",
        react:"pendiente"
    }

}
const alumno2 = {
    nombre:"maxi rosanda",
    dni:33080238
}
console.log(alumno2?.cursos?.react ?? "no esta anotado en el curso") 



