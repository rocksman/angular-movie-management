import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-movies-admin',
  templateUrl: './movies-admin.component.html',
  styleUrls: ['./movies-admin.component.css']
})
export class MoviesAdminComponent implements OnInit {
  showModal = false

  constructor(public admin: AdminService) { }


  changeModal = (flag) => {
    this.showModal = flag;
  }
  deleteMovie = (id) => {
    alert(id);
    this.admin.deleteMovie(id);
    console.log(this.admin.movies)
  }
  ngOnInit(): void {
  }

}
