import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },
  {
    id: uuid(),
    name: 'Yancha',
    power: 3600,
  }
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index: number): void {
  deleteCharacterById(id: string): void {

   this.characters = this.characters.filter(a => a.id !== id);
  }

}
