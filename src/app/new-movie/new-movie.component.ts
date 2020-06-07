import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { AdminService } from '../admin.service';
import { MoviesAdminComponent } from '../movies-admin/movies-admin.component';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent implements OnInit {
  constructor(
    public admin: AdminService,
    public movieComp: MoviesAdminComponent
  ) {}

  movie = new Movie(Math.random(), '', '', '', '', '');

  addMovie = () => {
    this.admin.addMovie(this.movie);
    this.movieComp.changeModal(false);
  };

  closeForm = () => {
    this.movieComp.changeModal(false);
  }
  
  ngOnInit(): void {}
}
