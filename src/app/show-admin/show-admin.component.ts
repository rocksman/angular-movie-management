import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-show-admin',
  templateUrl: './show-admin.component.html',
  styleUrls: ['./show-admin.component.css'],
})
export class ShowAdminComponent implements OnInit {
  showModal = false;

  constructor(public admin: AdminService) {}

  changeModal = (flag) => {
    this.showModal = flag;
  };
  deleteShow = (id) => {
    alert(id);
    this.admin.deleteShow(id);
    console.log(this.admin.shows);
  };

  ngOnInit(): void {}
}
