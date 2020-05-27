import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTheatreComponent } from './new-theatre.component';

describe('NewTheatreComponent', () => {
  let component: NewTheatreComponent;
  let fixture: ComponentFixture<NewTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
