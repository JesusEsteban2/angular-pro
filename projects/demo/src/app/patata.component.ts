import { Component } from '@angular/core';

@Component({
  selector: 'cas-patata',
  template: `<h2>Patata</h2>`,
  // templateUrl: './patata.html',
  //styleUrl: '',
  styles: [],
})
export class PatataComponent {
  constructor() {
    console.log('Patata');
  }
}
