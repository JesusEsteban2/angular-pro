import { Component, inject, input, output } from '@angular/core';
import { Film } from './types/films.type';
import { AddFilmComponent } from './components/add-edit-film/add-edit-film.component';
//import { TimeService } from '../../services/time.service';

@Component({
  selector: 'cas-films',
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export default class FilmsComponent {
  //timeService=inject(TimeService)
  // constructor (private timeService:TimeService) {}
  film = input<Film>();
  eventDelete = output<string>();
  eventUpdate = output<string>();
  isEditing = false;

  constructor() {}

  sendDelete() {
    const film = this.film() as Film;
    this.eventDelete.emit(film.id);
    this.eventUpdate.emit(film.id);
  }
  openEdit() {
    this.isEditing = !this.isEditing;
  }

  updateFilm(film: Film) {
    console.log(film);
  }
}
