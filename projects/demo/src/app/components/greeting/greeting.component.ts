import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greeting',
  imports: [FormsModule],
  template: `
    <h3>Saludo</h3>
    <p>Saludos {{ name || 'amigo' }}</p>
    <input type="text" [(ngModel)]="name" />
    <button (click)="clean()">Borrar</button>
  `,
  styleUrl: './greeting.component.css',
})
export class GreetingComponent {
  name = '';

  clean() {
    this.name = '';
  }

  input(target: HTMLInputElement | null) {
    if (target) {
      this.name = target.value;
    }
    return;
  }
}
