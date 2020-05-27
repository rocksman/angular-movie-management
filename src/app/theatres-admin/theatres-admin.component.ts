import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-theatres-admin',
  templateUrl: './theatres-admin.component.html',
  styleUrls: ['./theatres-admin.component.css'],
})
export class TheatresAdminComponent implements OnInit {
  showModal = false;
  constructor(public admin: AdminService) {}

  changeModal = (flag) => {
    this.showModal = flag;
  };
  ngOnInit(): void {}
}
