const eliminarPost = (id) =>{
    const btnEliminar = document.getElementById("eliminar" + id)
    btnEliminar.addEventListener("click", async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/" + id
        const options = {
            method:"DELETE"
        }
       const res = await fetch(url,options)
       await res.json()
       document.getElementById(id).remove()
    })
   
}

const actualizarPost = (id) =>{
    const actualizarPost = document.getElementById("actualizar" + id)
    actualizarPost.addEventListener("submit", async (e)=>{
        e.preventDefault()
        const title = e.target.children["title"].value
        const body = e.target.children["body"].value
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id
        const options = {
            method:"PATCH",
            body: JSON.stringify({title,body}),
            headers:{'Content-type': 'application/json; charset=UTF-8'}
        }
      const res =  await fetch(url,options)
      const postActualizado = await res.json()
      console.log(postActualizado)
            
    })
}
const verPost = ({id,userId,title,body}) =>{
    const contenedorPosts = document.querySelector("#contenedorPosts")
    const postContenedor = document.createElement("div")
    postContenedor.className = "postContenedor"
    postContenedor.id = id
    postContenedor.innerHTML = `
                                <span>Id de Post: ${id}</span>
                                <span>Id de usuario: ${userId}</span>
                                <form id="actualizar${id}">
                                    <input value="${title}" name="title">
                                    <textArea name="body">${body}"</textArea>
                                    <button type="submit">actualizar</button>
                                </form>
                                <button id="eliminar${id}">eliminar</button>
                                `
    contenedorPosts.append(postContenedor)
    eliminarPost(id)
    actualizarPost(id)
}
const crearPost = () =>{
    const crearPost = document.getElementById("crearPost")
    crearPost.addEventListener("submit",async (e)=>{
        e.preventDefault()
        const title = e.target.children["title"].value
        const body = e.target.children["body"].value
        const userId = e.target.children["userId"].value
        const url = 'https://jsonplaceholder.typicode.com/posts/'
        const options = {
            method:"POST",
            body: JSON.stringify({title,body,userId}),
            headers:{'Content-type': 'application/json; charset=UTF-8'}
        }
      const res =  await fetch(url,options)
      const postCreado = await res.json()
      verPost(postCreado)

    })
}
const traerPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    posts.forEach(post => {
      verPost(post)
    })

  } 

crearPost()
traerPosts()
