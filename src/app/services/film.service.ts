import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FilmPreview} from "../instances/film-preview";
import {FilmPost} from "../instances/film-post";
import {FilmMember} from "../instances/film-member";
import {Genre} from "../instances/genre";
import {MemberCreateComponent} from "../member-create/member-create.component";
import {environment} from "../../environments/environment.development";

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
    return this._http.get(environment.apiUrl + '/api/v1/film', this._httpOptions).pipe(map((data: any) => {
      let filmPreviewArray = data;
      return filmPreviewArray.map((preview: any): FilmPreview => {
        console.log(preview)
        return new FilmPreview(preview['id'], preview['name'], preview['poster'], preview['dateRelease']);
      })
    }))
  }

  public getFilmPost(id: number): Observable<FilmPost> {
    return this._http.get(environment.apiUrl + `/api/v1/film/${id}`, this._httpOptions).pipe(map((post: any) => {
      let genres = []
      let members = []
      for (let genre of post['genres']) {
        genres.push(genre['name'])
      }
      for (let member of post['members']) {
        members.push({id: member['id'],name: member['name']})
      }
      return new FilmPost(post['id'], post['name'], post['poster'], post['dateRelease'], post['annotation'],
        post['originalName'], members, genres)
    }))
  }

  public getMemberPost(id: number) {
    return this._http.get(environment.apiUrl + `/api/v1/member/${id}`, this._httpOptions).pipe(map((post: any) => {
      console.log(post)
     return new FilmMember(post['id'], post['name'], post['birthdate'], post['information'], post['image'])
    }))
  }

  public createFilmPost(film: FilmPost) {
    console.log(film)
    return this._http.post(environment.apiUrl + `/api/v1/film`, film, this._httpOptions)
      .subscribe(() => alert("Фильм создан!"))
  }
  public editFilmPost(film: FilmPost) {
    return this._http.put(environment.apiUrl + `/api/v1/film`, film, this._httpOptions)
      .subscribe(() => alert("Фильм изменен!"))
  }
  public deleteFilmPost(id: number) {
    return this._http.delete(environment.apiUrl + `/api/v1/film/${id}`,  this._httpOptions)
      .subscribe(() => alert("Фильм удален!"))
  }

  public deleteMemberPost(id: number) {
    return this._http.delete(environment.apiUrl + `/api/v1/member/${id}`,  this._httpOptions)
      .subscribe(() => alert("Участник удален!"))
  }

  public getGenres() {
    return this._http.get(environment.apiUrl + `/api/v1/genre`,  this._httpOptions).pipe(map((post: any) => {
      let genre = post
      return genre.map((data: any) => {
        return new Genre(data['id'], data['name']);
      })
    }))
  }

  public getMembers() {
    return this._http.get(environment.apiUrl + `/api/v1/member`,  this._httpOptions).pipe(map((post: any) => {
      let member = post
      return member.map((data: any) => {
        return new FilmMember(data['id'], data['name']);
      })
    }))
  }

  public createMemberPost(member: FilmMember) {
    return this._http.post(environment.apiUrl + `/api/v1/member`, member, this._httpOptions)
      .subscribe(() => alert("Участник создан!"))
  }

  public createGenre(genre: Genre) {
    return this._http.post(environment.apiUrl + `/api/v1/genre`, genre, this._httpOptions)
      .subscribe(() => alert("Жанр создан!"))
  }
}

