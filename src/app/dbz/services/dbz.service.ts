import { Injectable } from '@angular/core';
import { Character } from './../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'  //Nuestro servicio será Singleton en toda la aplicación
})

export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 1000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 9500
    }, {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    addCharacter( character: Character ): void {
        //Con el operador spread (...), toma todas las propiedades de character y las esparce en newCharacter
        const newCharacter: Character = { id: uuid(), ...character};
        
        this.characters.push(newCharacter);
    }

    deleteCharacterById( id:string ) {
        this.characters = this.characters.filter( character => character.id !== id);
    }
}
