import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAdminComponent } from './movies-admin.component';

describe('MoviesAdminComponent', () => {
  let component: MoviesAdminComponent;
  let fixture: ComponentFixture<MoviesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
