import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatresAdminComponent } from './theatres-admin.component';

describe('TheatresAdminComponent', () => {
  let component: TheatresAdminComponent;
  let fixture: ComponentFixture<TheatresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
