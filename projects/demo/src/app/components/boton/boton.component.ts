import { Component, inject } from '@angular/core';

@Component({
  selector: 'cas-boton',
  imports: [],
  styleUrl: './boton.component.css',
  template: ` <button [name]="'name'" type="button">{{ content }}</button> `,
})
export default class BotonComponent {
  name: string;
  public content: string;
  @inject name,
  constructor(name:string, content:string) {
    this.name = name;
    this.content = content;
  }
}
