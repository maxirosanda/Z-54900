/*
console.log("inicio")
setTimeout(()=>{
    console.log("mitad del proceso")
    console.log("dbfhfds dfsf")
   },2000)

console.log("fin")
*/
/*
1)
inicio
mitad del proceso
fin

2)
inicio
fin
mitad del proceso
*/

/*
const letras = "hola"

for (let letra of letras) {
    setTimeout(()=>{
        console.log(letra)
    },1000)
    
}

for (let letra of "mundo") {
    setTimeout(()=>{
        console.log(letra)
    },3000)
}

*/
/*
const funcion1 = () =>{
    console.log("funcion1")
}
const funcion2 = () =>{
    console.log("funcion2")
}
funcion1()
funcion2()
*/

const promesa = new Promise((resolve, reject)=>{
    setTimeout( () =>{
        resolve("promesa resuelta")
    },5000)
    
}).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("esto sale en los dos casos")
})

