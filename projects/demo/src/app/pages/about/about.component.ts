import { Component } from '@angular/core';
import { GreetingComponent } from '../../components/greeting/greeting.component';

@Component({
  selector: 'cas-about',
  imports: [GreetingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {}
