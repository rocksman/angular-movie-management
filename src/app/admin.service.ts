import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Theatre } from './theatre';
import movie from './files/movies.json';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  movies: Movie[];
  theatres: Theatre[];
  constructor() {
    this.movies = [...movie];

    this.theatres = [
      new Theatre(101, 'IMAX', 'Delhi', 12, [
        'Tarzan',
        'Interstellar',
        'Stuart Little',
        'The sound of Music',
      ]),
    ];
  }

  //Movie
  addMovie = (data) => {
    let mov = new Movie(
      data.id,
      data.name,
      data.director,
      data.description,
      data.image
    );
    this.movies.push(mov);
  };
  deleteMovie = (id) => {
    let pos = -1;
    this.movies.map((e, i) => {
      if (e.id == id) {
        pos = i;
      }
    });
    if (pos > -1) {
      this.movies.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  };

  //Theatre
  addTheatre = (data) => {
    let th = new Theatre(
      data.id,
      data.name,
      data.city,
      data.noOfScreens,
      data.movies
    );
    this.theatres.push(th);
  };
}
