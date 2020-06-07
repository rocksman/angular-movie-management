import { Component, OnInit } from '@angular/core';
import { Screen } from '../screen';
import { AdminService } from '../admin.service';
import { ScreenAdminComponent } from '../screen-admin/screen-admin.component';

@Component({
  selector: 'app-new-screen',
  templateUrl: './new-screen.component.html',
  styleUrls: ['./new-screen.component.css'],
})
export class NewScreenComponent implements OnInit {
  constructor(
    public admin: AdminService,
    public screenComp: ScreenAdminComponent
  ) {}

  screen = new Screen(Math.random(), '', null, [], null, null);

  addScreen = () => {
    this.admin.addScreen(this.screen);
    this.screenComp.changeModal(false);
  };
  closeForm = () => {
    this.screenComp.changeModal(false);
  };

  ngOnInit(): void {}
}
