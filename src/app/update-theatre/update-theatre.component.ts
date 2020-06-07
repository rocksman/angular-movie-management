import { Component, OnInit } from '@angular/core';
import { Theatre } from '../theatre';
import { AdminService } from '../admin.service';
import { TheatresAdminComponent } from '../theatres-admin/theatres-admin.component';

@Component({
  selector: 'app-update-theatre',
  templateUrl: './update-theatre.component.html',
  styleUrls: ['./update-theatre.component.css'],
})
export class UpdateTheatreComponent implements OnInit {
  constructor(
    public admin: AdminService,
    public theatreComp: TheatresAdminComponent
  ) {}

  theatre = new Theatre(null, '', '', null, []);

  addTheatre = () => {
    this.admin.addTheatre(this.theatre);
    this.theatreComp.changeUpdate(false);
  };

  ngOnInit(): void {}
}
