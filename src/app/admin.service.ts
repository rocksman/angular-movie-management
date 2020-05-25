import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  movies: Movie[]
  constructor() {
    this.movies= [new Movie(1, "Tarzan", "Ron", "A beautiful movie about ape man", "https://vignette.wikia.nocookie.net/disneyprincess/images/5/50/Tarzan.jpg/revision/latest?cb=20180526223057")]
  }
  addMovie = (data) => {
    let mov = new Movie(data.id, data.name, data.director, data.description, data.image);
    this.movies.push(mov);
  }
  deleteMovie = (id) => {
    let pos = -1;
    this.movies.map((e, i)=> {if(e.id == id){
      pos = i;
    }});
    if(pos>-1){
      this.movies.splice(pos, 1);
      return true;
    }
    else{
      return false;
    }
  }
}
