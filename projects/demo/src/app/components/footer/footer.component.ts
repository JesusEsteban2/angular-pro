import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cas-footer',
  imports: [DatePipe],
  styles: `
    :host {
      display: block;
      align-items: center;
      text-align: center;
    }
  `,
  template: `<p>
      {{ today.toLocaleDateString() }}-{{ today.toLocaleTimeString() }}
    </p>
    <p>
      {{ today | date: 'full' }}
    </p> `,
})
export class FooterComponent {
  today = new Date();

  constructor() {
    console.log('FooterComponent');
  }
}
