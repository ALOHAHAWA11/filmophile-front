import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPostComponent } from './film-post.component';

describe('FilmPostComponent', () => {
  let component: FilmPostComponent;
  let fixture: ComponentFixture<FilmPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
