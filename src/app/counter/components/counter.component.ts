import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `


  <h3>
  Counter: {{counter}}
</h3>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
  public counter:number = 10;

  constructor() { }


  ngOnInit() { }

  increaseBy(value:number) {
    this.counter += value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}
