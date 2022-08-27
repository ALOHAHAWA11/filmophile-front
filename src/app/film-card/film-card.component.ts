import {Component, OnInit, OnDestroy} from '@angular/core';
import {FilmService} from "../services/film.service";
import {FilmPreview} from "../instances/film-preview";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
  providers: [FilmService]
})
export class FilmCardComponent implements OnInit, OnDestroy {

  private _filmPreview: FilmPreview[] = [];
  private _subscription$: Subscription = new Subscription();

  constructor(private _filmService: FilmService) {
  }

  public get filmPreview() {
    return this._filmPreview;
  }

  ngOnInit(): void {
    this._subscription$ = this._filmService.getFilmPreview().subscribe((data: any) => this._filmPreview = data);
  }

  ngOnDestroy() {
    if (this._subscription$) {
      this._subscription$.unsubscribe();
    }
  }

}
