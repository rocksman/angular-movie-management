import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css'],
})
export class MovieSliderComponent implements OnInit {
  constructor(public admin: AdminService) {}

  ngOnInit(): void {}
}
