const traerPokemons = async (offset ,limit) =>{

    const url = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + " &limit=" + limit
    const res = await fetch(url)
    const data = await res.json()
    const pokemons = data.results
    console.log(pokemons)
    const tarjetas = document.getElementById("tarjetas")
    pokemons.forEach(pokemon => {
        const tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta"
        tarjeta.innerHTML = `
                                <h3>${pokemon.name}</h3>
                                
        `
    tarjetas.append(tarjeta)
    });
   


}

const traerTemperatura = async (ciudad) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},ar&appid=71db4a3153716749adab248fafe3b05e&units=metric`
    console.log(url)
    const res = await fetch(url)
    const datos = await res.json()
    console.log(datos.main.temp)
}

traerTemperatura("Buenos Aires")