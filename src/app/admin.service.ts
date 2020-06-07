import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Theatre } from './theatre';
import { Screen } from './screen';
import movie from './files/movies.json';
import theatre from './files/theatres.json';
import screen from './files/screens.json';
import show from './files/shows.json';
import { Show } from './show';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  movies: Movie[];
  theatres: Theatre[];
  screens: Screen[];
  shows: Show[];

  movieById: Movie;

  constructor() {
    this.movies = [...movie];

    this.theatres = [...theatre];

    this.screens = [...screen];

    this.shows = [...show];
  }

  //Movie
  addMovie = (data) => {
    let mov = new Movie(
      data.id,
      data.name,
      data.director,
      data.description,
      data.image,
      data.video
    );
    this.movies.push(mov);
  };

  getMovieById = (id) => {
    this.movies.map((e, i) => {
      if (e.id == id) {
        this.movieById = e;
      }
    });
    return this.movieById;
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
  deleteTheatre = (id) => {
    let pos = -1;
    this.theatres.map((e, i) => {
      if (e.id == id) {
        pos = i;
      }
    });
    if (pos > -1) {
      this.theatres.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  };

  //Screen
  addScreen = (data) => {
    let scrn = new Screen(
      data.id,
      data.name,
      data.theatreId,
      data.showList,
      data.rows,
      data.columns
    );
    this.screens.push(scrn);
  };
  deleteScreen = (id) => {
    let pos = -1;
    this.screens.map((e, i) => {
      if (e.id == id) {
        pos = i;
      }
    });
    if (pos > -1) {
      this.screens.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  };

  //Show
  addShow = (data) => {
    let shw = new Show(
      data.id,
      data.name,
      data.startTime,
      data.endTime,
      data.movie
    );
    this.shows.push(shw);
  };
  deleteShow = (id) => {
    let pos = -1;
    this.shows.map((e, i) => {
      if (e.id == id) {
        pos = i;
      }
    });
    if (pos > -1) {
      this.shows.splice(pos, 1);
      return true;
    } else {
      return false;
    }
  };
}
