import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cas-footer',
  imports: [DatePipe],
  styleUrl: './footer.component.css',
  template: `<p>{{ today.toDateString() }}-{{ today.toLocaleTimeString() }}</p>
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
