import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AdminService } from '../admin.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-display-details',
  templateUrl: './movie-display-details.component.html',
  styleUrls: ['./movie-display-details.component.css'],
})
export class MovieDisplayDetailsComponent implements OnInit {
  @Input() movieId: number;
  movie: Movie;

  constructor(public admin: AdminService) {}

  getMovieById = () => {
    // this.movie = this.admin.getMovieById(this.id);
    // console.log(this.movie);
    console.log(this.movieId);
  };

  selectSeat = false;

  selectSeats = (flag) => {
    this.selectSeat = flag;
  };

  ngOnInit(): void {
  }
}
