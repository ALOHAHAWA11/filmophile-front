import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FilmPreview} from "../instances/film-preview";
import {FilmPost} from "../instances/film-post";
import {MemberPreview} from "../instances/film-member-preview";
import {Member} from "../instances/film-member";


@Injectable()
export class FilmService {

  constructor(private _http: HttpClient) {
  }

  public getFilmPreview(): Observable<FilmPreview[]> {
    return this._http.get('http://127.0.0.1:8000/api/films/').pipe(map((data: any) => {
      let filmPreviewArray = data;
      return filmPreviewArray.map((preview: any): FilmPreview => {
        return new FilmPreview(preview.pk, preview.name_film, preview.annotation, preview.country, preview.poster);
      })
    }))
  }

  public getFilmPost(primaryKey: number): Observable<FilmPost> {
    return this._http.get('http://127.0.0.1:8000/api/films/' + String(primaryKey)).pipe(map((data: any) => {
      let actors: MemberPreview[] = [];
      let directors: MemberPreview[] = [];
      let writers: MemberPreview[] = [];
      let producers: MemberPreview[] = [];
      let operators: MemberPreview[] = [];
      let genre: string[] = [];
      for (let genreName of data['genre']) {
        genre.push(genreName.genre_name);
      }
      for (let actor of data['actors']) {
        actors.push(new MemberPreview(actor['pk'], actor['name_member']));
      }
      for (let director of data['directors']) {
        directors.push(new MemberPreview(director['pk'], director['name_member']));
      }
      for (let operator of data['operators']) {
        operators.push(new MemberPreview(operator['pk'], operator['name_member']));
      }
      for (let writer of data['writers']) {
        writers.push(new MemberPreview(writer['pk'], writer['name_member']));
      }
      for (let producer of data['producers']) {
        producers.push(new MemberPreview(producer['pk'], producer['name_member']));
      }
      return new FilmPost(data['pk'], data['name_film'], data['annotation'], data['country'], data['poster'],
        data['original_name'], genre, actors, directors, operators, writers, producers, data['date_release']);
    }));
  }

  public getMemberPost(primaryKey: number): Observable<Member> {
    return this._http.get('http://127.0.0.1:8000/api/films/' + String(primaryKey) + '/member').pipe(map((data: any) => {
      let roles: string[] = [];
      for (let role of data['role']) {
        roles.push(role.role);
      }
      return new Member(data['pk'], data['name_member'], data['image'], data['country'], data['information'], data['birthday'], roles);
    }))
  }
}

