import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNNames: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Loki'];
  public deletedHero?: string;


  deleteLastHero(): void {
    this.deletedHero = this.heroNNames.pop()?.toString();

  }

}



