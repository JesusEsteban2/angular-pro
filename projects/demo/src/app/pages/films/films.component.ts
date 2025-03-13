import { Component, input, output } from '@angular/core';
import { Film } from './types/films.type';
import { AddFilmComponent } from './components/add-film/add-film.component';

@Component({
  selector: 'cas-films',
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export default class FilmsComponent {
  film = input<Film>();
  eventDelete = output<string>();
  eventUpdate = output<string>();
  isEditing = false;

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
