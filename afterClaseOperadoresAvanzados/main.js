const preguntas = [
    {
        id:1,
        pregunta:"¿dkjfsdakigh nhdgsdgih jndfilosd?",
        opciones:["respuesta numero 1","respuesta numero 2","respuesta numero 3"],
        correcta:0,
        respuesta:false
    },
    {
        id:2,
        pregunta:"¿dkjfsdakigh nhdgsdgih jndfilosd?",
        opciones:["respuesta numero 1","respuesta numero 2","respuesta numero 3"],
        correcta:1,
        respuesta:false
    },
    {
        id:3,
        pregunta:"¿dkjfsdakigh nhdgsdgih jndfilosd?",
        opciones:["respuesta numero 1","respuesta numero 2","respuesta numero 3"],
        correcta:0,
        respuesta:false
    }
    ,
    {
        id:4,
        pregunta:"¿dkjfsdakigh nhdgsdgih jndfilosd?",
        opciones:["respuesta numero 1","respuesta numero 2","respuesta numero 3"],
        correcta:0,
        respuesta:false
    }
]
const verPregunta = ({id,pregunta,opciones}) =>{
    const formularioPregunta = document.createElement("form")
    formularioPregunta.className = "formularioPregunta"
    formularioPregunta.id = "formularioPregunta" + id
    const titulo = document.createElement("h3")
    titulo.innerText = pregunta
    formularioPregunta.append(titulo)
    opciones.forEach((opcion,index) => {
        const input = document.createElement("input")
        input.id = "opcion" + index
        input.type = "radio"
        input.name = "respuesta"
        input.value = index
        const label = document.createElement("label")
        label.setAttribute("for","opcion" + index)
        label.innerText = opcion
        formularioPregunta.append(input,label)
    });
    const btn = document.createElement("button")
    btn.innerText = "Siguiente"
    btn.type="submit"
    formularioPregunta.append(btn)
    const app = document.querySelector("#app")
    app.append(formularioPregunta)

//----------------------------------------
    formularioPregunta.addEventListener("submit",(e)=>{
        e.preventDefault()
        const repuestaUsuario = e.target.children["respuesta"].value
        preguntas.forEach((pregunta)=>{
            if(pregunta.correcta == repuestaUsuario){
            pregunta.respuesta = true
        }
        })
        console.log(preguntas)
        verPregunta(preguntas[id++])
    })

}
verPregunta(preguntas[0])