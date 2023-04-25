import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FilmPreview} from "../instances/film-preview";
import {FilmPost} from "../instances/film-post";


@Injectable()
export class FilmService {

  constructor(private _http: HttpClient) {
  }
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:password')
    })
  }
  public getFilmPreview(): Observable<FilmPreview[]> {
    return this._http.get('http://localhost:8080/api/v1/film', this._httpOptions).pipe(map((data: any) => {
      let filmPreviewArray = data;
      return filmPreviewArray.map((preview: any): FilmPreview => {
        console.log(data)
        console.log(preview)
        return new FilmPreview(preview['id'], preview['name'], preview['poster'], preview['dateRelease']);
      })
    }))
  }

  public getFilmPost(id: number): Observable<FilmPost> {
    return this._http.get(`http://localhost:8080/api/v1/film/${id}`, this._httpOptions).pipe(map((post: any) => {
      console.log(post)
      let genres = []
      for (let genre of post['genres']) {
        genres.push(genre)
      }
      return new FilmPost(post['id'], post['name'], post['poster'], post['dateRelease'], post['annotation'],
        post['originalName'], undefined, genres)
    }))
  }


}

