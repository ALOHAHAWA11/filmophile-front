import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FilmPost} from "../instances/film-post";
import {FilmService} from "../services/film.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-film-post',
  templateUrl: './film-post.component.html',
  styleUrls: ['./film-post.component.css'],
  providers: [FilmService]
})
export class FilmPostComponent implements OnInit, OnDestroy {

  private _subscription$: Subscription = new Subscription();
  private _filmPost: FilmPost = new FilmPost();
  private _id: number = 0;


  constructor(private _filmService: FilmService, private _activatedRoute$: ActivatedRoute) {
  }


  ngOnInit(): void {
    this._activatedRoute$.params.subscribe((params: Params) => (
      this._id = params['id']
  ));
    this._subscription$ = this._filmService.getFilmPost(this._id).subscribe((data: any) => this._filmPost = data);
  }

  ngOnDestroy() {
    if (this._subscription$) {
      this._subscription$.unsubscribe();
    }
  }

  get filmPost(): FilmPost {
    return this._filmPost;
  }

  public deleteFilm() {
    this._filmService.deleteFilmPost(this._id)
  }
}
