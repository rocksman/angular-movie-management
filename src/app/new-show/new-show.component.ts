import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { AdminService } from '../admin.service';
import { ShowAdminComponent } from '../show-admin/show-admin.component';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css'],
})
export class NewShowComponent implements OnInit {
  display = 'none';
  constructor(
    public admin: AdminService,
    public showComp: ShowAdminComponent
  ) {}

  show = new Show(Math.random(), '', '', '', '');

  addShow = () => {
    this.admin.addShow(this.show);
    this.showComp.changeModal(false);
  };

  closeForm = () => {
    this.showComp.changeModal(false);
  };

  ngOnInit(): void {}
}
