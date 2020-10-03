/* Crear un archivo “main.js” que importe la clase hija y realice una función IIFE con el
nombre de “llamadoPersonajes” */


import DetallesPersonajes from '../js/detallesPersonajes.js';

(function llamadoPersonajes () {
    const urlAPI = 'https://rickandmortyapi.com/api/character/'
    let respuesta = resultados
    let retorno;

    const obtenerCaracter = async () =>{
        try {
            let resultado = await fetch(urlAPI)   // Web API
            return await resultado.json()
        } catch (error) {
            console.log(error);
        }
    }

    let consultarId = async (m) => {
        try {
            m.results.forEach(e => {
                let fecha = new Date(e.created)
                let fechaTexto = ` ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
                let chico = new DetallesPersonajes(e.id, e.name, e.status, e.species, e.gender, fechaTexto, e.origin.name, e.location, e.episode.length)
                setTimeout(()=>{
                    spinner.style.display = 'none'
                    cantidadPersonajes.innerHTML = m.results.length
                    respuesta.innerHTML += `
                        ${chico.infoGeneral(e)}
                        ${chico.infoModal()}`
                },2000)
            });
        } catch (error) {
            console.log(error);
        }
    }

    retorno = obtenerCaracter()
    retorno.then(m => consultarId(m))

})();




//Esto es mas corto y hace lo mismo

/* fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(datos => {
        console.log(datos)
        datos.results.forEach(e => {
            let fecha = new Date(e.created)
            let fechaTexto = ` ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
            let chico = new DetallesPersonajes(e.id, e.name, e.status, e.species, e.gender, fechaTexto, e.origin.name, e.location, e.episode.length)
            
            setTimeout(()=>{
                spinner.style.display = 'none'
                cantidadPersonajes.innerHTML = datos.results.length
                resultados.innerHTML += `
                    ${chico.infoGeneral(e)}
                    ${chico.infoModal()}`
            },2000)
            
        });
    })
    .catch(error => console.error(error));  */