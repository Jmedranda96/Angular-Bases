import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power:10
    }
  ];

 /*  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter(); */

  @Output()
  public OnDeleteId: EventEmitter<string> = new EventEmitter();

onDeleteCharacterById(id:string):void{
  this.OnDeleteId.emit(id);
}

/*   onDeleteCharacter(index:number):void{
    //TODO: Emitir el indice en el log
    //debugger;
    console.log('Index > ',index);
    this.onDeleteId.emit(index);
  } */
}
