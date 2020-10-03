/* Crear un archivo con el nombre de “personajes.js” que exporte una clase padre con el
nombre de “Personajes” que reciba en su constructor un id de personaje. Agregando
métodos get y set para obtener el atributo además de closures para proteger el
atributo id. */

export default class Personajes{
    constructor(id){
        this._id = () => id
    }

    get id(){
        return this._id
    }

    set id(new_id){
        this._id = new_id
    }
}