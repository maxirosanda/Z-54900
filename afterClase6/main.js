class Alumno{
    constructor(nombre,apellido,dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.promedio = 0
        this.notas = []
    }

}

const alumnos = []
let continuar = true
while(continuar === true){
    const nombre = prompt("ingrese nombre").toUpperCase()
    const apellido = prompt("ingrese Apellido").toUpperCase()
    const DNI = parseInt(prompt("ingrese DNI")) 
    alumnos.push(new Alumno(nombre,apellido,DNI))
    continuar = confirm("Quiere seguir ingresando alumnos")
}


const eliminarAlumno = (dni) => {
    const index = alumnos.findIndex((alumno)=> alumno.dni == dni)
    if(index != -1){
        alumnos.splice(index,1)
    }
}

continuar = confirm("Quiere eliminar un alumn")
while(continuar){
    const alumnoDniEliminar = parseInt(prompt("ingrese dni alumno a eliminar")) 
    eliminarAlumno(alumnoDniEliminar)
    continuar = confirm("Quiere seguir eliminando alumnos")
}


const actualizarAlumno = (dni)=>{
    const index = alumnos.findIndex((alumno)=> alumno.dni == dni)
    if(index != -1){
        const nombre = prompt("ingrese nombre").toUpperCase()
        const apellido = prompt("ingrese Apellido").toUpperCase()
        const DNI = parseInt(prompt("ingrese DNI"))
        alumnos[index] = new Alumno(nombre,apellido,dni)
    }
}
continuar = confirm("Quiere actualizar un alumno")
while(continuar){
    const alumnoDniActualizar = parseInt(prompt("ingrese dni de alumno a actualizar")) 
    actualizarAlumno(alumnoDniActualizar)
    continuar = confirm("Quiere seguir eliminando alumnos")
}

continuar = confirm("quiere cargar notas a un alumno?")
while(continuar === true){
    const alumnoDni = parseInt(prompt("ingrese dni del alumno para cargar las notas"))
    const index = alumnos.findIndex((alumno)=> alumno.dni == alumnoDni)
    if(index == -1){
        alert("alumno no encontrado")
    }else{
        const nota = parseFloat(prompt("Ingrese la nota a cargar"))
        alumnos[index].notas.push(nota)
    }
    continuar = confirm("quiere cargar notas a un alumno?")
}

continuar = confirm("Quiere el promedio de un alumno?")
while(continuar){
    const alumnoDni = parseInt(prompt("ingrese dni del alumno para ver el promedio"))
    const index = alumnos.findIndex((alumno)=> alumno.dni == alumnoDni)
    if(index == -1){
        alert("alumno no encontrado")
    }else{
        const notas = alumnos[index].notas
        if(notas.length != 0){
            const promedio = notas.reduce((acc,nota)=> acc + nota,0)/notas.length
            alumnos[index].promedio = promedio
            console.log(promedio)
        }else{
            alert("este alumno no tiene notas")
        }
        
    }
    continuar = confirm("quiere ver otro promedio")
}

console.log(alumnos)
