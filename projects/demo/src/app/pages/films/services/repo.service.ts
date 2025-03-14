import { Injectable } from '@angular/core';
import { FILMS } from '../../../../../Data/film.data';
import { Film } from '../types/films.type';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  films: Film[] = FILMS;

  loadFilms(): Promise<Film[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.films);
      }, 1000);
    });
  }
}
