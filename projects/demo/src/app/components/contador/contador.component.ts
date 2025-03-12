import { Component } from '@angular/core';

@Component({
  selector: 'cas-contador',
  imports: [],
  template: `
    <h3>Contador</h3>
    <button (click)="changeCounter(-1)" (disable)="(counter <= -5)">➖</button>
    <output [class]="counter < 0 ? 'negative' : ''">
      {{ counter }}
    </output>
    <button (click)="changeCounter(+1)" (disable)="(counter >= 5)">➕</button>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    output {
      margin: 0;
      font-size: 1.5rem;
      width: 50px;
      text-align: center;
    }
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
