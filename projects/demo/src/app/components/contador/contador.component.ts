import { Component } from '@angular/core';

@Component({
  selector: 'cas-contador',
  imports: [],
  template: `
    <h3>Contador</h3>
    <button (click)="changeCounter(-1)" (disable)="(counter <= -5)">-</button>
    <output [class]="counter < 0 ? 'negative' : ''">
      {{ counter }}
    </output>
    <button (click)="changeCounter(+1)" (disable)="(counter >= 5)">+</button>
  `,
  styles: `
    .negative {
      color: red;
    }
  `,
})
export class ContadorComponent {
  counter = 0;

  changeCounter(n: number) {
    this.counter += n;
  }
}
