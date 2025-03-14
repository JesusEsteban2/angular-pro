import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Proveedor de inyectores.
})
export class TimeService {
  private time = new Date();

  getTime() {
    return this.time;
  }
}
