/* Crear un archivo con el nombre de “detallesPersonajes.js” que exporte una clase hija
con el nombre de “DetallesPersonajes” que reciba en su constructor las propiedades
indicadas en el diagrama de clases. Agregando métodos get y set para obtener los
atributos name, status, species y gender. Utilizando closures solo para los atributos
name y status */

import Personajes from '../js/personajes.js';

export default class DetallesPersonajes extends Personajes{
    constructor(id, name, status, species, gender, created, origin, location, episode){
        super(id)
        this._name = () => name
        this._status = () => status
        this._species = species
        this._gender = gender
        this._created = created
        this._origin = origin
        this._location = location
        this._episode = episode
    }

    get name(){
        return this._name
    }

    set name(new_name){
        this._name = new_name
    }

    get status(){
        return this._status
    }

    set status(new_status){
        this._status = new_status
    }

    infoModal() {
        return `
            <div class="modal fade" id="character${this.id()}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ventana${this.id()}">${this.name()}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li> ID: ${this.id()}</li>
                            <li> Nombre: ${this.name()}</li>
                            <li> Género: ${this._gender}</li>
                            <li> Especie: ${this._species}</li>
                            <li> Status: ${this.status()}</li>
                            <li> Creado: ${this._created}</li>
                            <li> Origen: ${this._origin}</li>
                            <li> Cantidad de Episodios: ${this._episode}</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        `
    }

    infoGeneral(e){
        return `
            <div>
                <img type="button" src="${e.image}" alt="Cinque Terre" data-toggle="modal" data-target="#character${e.id}">
                <ul>
                    <li>${e.id}</li>
                    <li>${e.species}</li>
                </ul>
            </div>
        `
    }
}