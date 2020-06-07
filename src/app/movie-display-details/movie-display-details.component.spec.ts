import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDisplayDetailsComponent } from './movie-display-details.component';

describe('MovieDisplayDetailsComponent', () => {
  let component: MovieDisplayDetailsComponent;
  let fixture: ComponentFixture<MovieDisplayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDisplayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
