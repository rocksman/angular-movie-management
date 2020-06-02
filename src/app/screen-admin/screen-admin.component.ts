import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-screen-admin',
  templateUrl: './screen-admin.component.html',
  styleUrls: ['./screen-admin.component.css'],
})
export class ScreenAdminComponent implements OnInit {
  showModal = false;

  constructor(public admin: AdminService) {}

  changeModal = (flag) => {
    this.showModal = flag;
  };

  deleteScreen = (id) => {
    alert(id);
    this.admin.deleteScreen(id);
    console.log(this.admin.movies);
  };

  ngOnInit(): void {}
}
