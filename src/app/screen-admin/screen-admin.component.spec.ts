import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAdminComponent } from './screen-admin.component';

describe('ScreenAdminComponent', () => {
  let component: ScreenAdminComponent;
  let fixture: ComponentFixture<ScreenAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
