import { Component, OnInit } from '@angular/core';
import { Theatre } from '../theatre';
import { AdminService } from '../admin.service';
import { TheatresAdminComponent } from '../theatres-admin/theatres-admin.component';

@Component({
  selector: 'app-new-theatre',
  templateUrl: './new-theatre.component.html',
  styleUrls: ['./new-theatre.component.css'],
})
export class NewTheatreComponent implements OnInit {
  constructor(
    public admin: AdminService,
    public theatreComp: TheatresAdminComponent
  ) {}

  theatre = new Theatre(Math.random(), '', '', null, ['']);

  addTheatre = () => {
    this.admin.addTheatre(this.theatre);
    this.theatreComp.changeModal(false);
  };

  closeForm = () => {
    this.theatreComp.changeModal(false);
  }

  ngOnInit(): void {}
}
