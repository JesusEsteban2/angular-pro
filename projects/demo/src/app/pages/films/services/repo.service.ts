import { inject, Injectable } from '@angular/core';
import { Film } from '../types/films.type';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { FILMS } from '../../../../data/films';

type ApiResponse = {
  results: Film[];
  error: string;
};

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  url = 'http://localhost:3000/api/films';
  httpClient = inject(HttpClient);

  loadFilms(): Observable<Film[]> {
    return this.httpClient
      .get<ApiResponse>(this.url)
      .pipe(map((r) => r.results));
  }

  createFilm(film: Omit<Film, 'id'>): Observable<Film> {
    film.description = 'Created by Angular';
    film.director = 'Director';
    film.rating = 5;
    film.poster = 'https://via.placeholder.com/150';
    film.categories = ['Action'];
    film.duration = 120;

    return this.httpClient
      .post<ApiResponse>(this.url, film)
      .pipe(map((r) => r.results[0]));
  }

  updateFilm(film: Omit<Film, 'id'>): Observable<Film> {
    film.description = 'Created by Angular';
    film.director = 'Director';
    film.rating = 5;
    film.poster = 'https://via.placeholder.com/150';
    film.categories = ['Action'];
    film.duration = 120;

    return this.httpClient
      .post<ApiResponse>(this.url, film)
      .pipe(map((r) => r.results[0]));
  }

  deleteFilm(id): Observable<Film> {
    film.description = 'Created by Angular';
    film.director = 'Director';
    film.rating = 5;
    film.poster = 'https://via.placeholder.com/150';
    film.categories = ['Action'];
    film.duration = 120;

    return this.httpClient
      .post<ApiResponse>(this.url, film)
      .pipe(map((r) => r.results[0]));
  }
}

// export class RepoServiceFetch {
//   url = 'http://localhost:3000/api/films';

//   async loadFilms(): Promise<Film[]> {
//     const response = await fetch(this.url);
//     const results: ApiResponse = await response.json();
//     console.log(results.results);
//     return results.results;
//   }

//   createFilm(film: Film): Promise<Film> {
//     return fetch(this.url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(film),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log('Film created', result);
//         return result;
//       });
//   }

//   // loadFilms(): Promise<Film[]> {
//   //   return new Promise((resolve) => {
//   //     setTimeout(() => {
//   //       resolve(FILMS);
//   //       console.log('Films loaded from API');
//   //     }, 2000);
//   //   });
//   // }

//   // async loadFilms(): Promise<Film[]> {
//   //   return FILMS
//   // }
// }
