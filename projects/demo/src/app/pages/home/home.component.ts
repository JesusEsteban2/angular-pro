import { Component } from '@angular/core';
import { ContadorComponent } from '../../components/contador/contador.component';

@Component({
  selector: 'cas-home',
  imports: [ContadorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {}
