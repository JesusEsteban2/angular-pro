import { Component } from '@angular/core';

@Component({
  selector: 'cas-greeting',
  imports: [],
  template: `
    <h3>Saludo</h3>
    <p>Saludos {{ name || 'amigo' }}</p>
    <input type="text" [value]="'name'" />
    <button (click)="clean()">Borrar</button>
  `,
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  name = '';

  clean() {
    this.name = 'amigo';
  }
}
