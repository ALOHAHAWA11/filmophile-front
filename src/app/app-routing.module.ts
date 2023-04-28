import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FilmPostComponent} from "./film-post/film-post.component";
import {FilmCardComponent} from "./film-card/film-card.component";
import {MemberPostComponent} from "./member-post/member-post.component";
import {FilmCreateComponent} from "./film-create/film-create.component";
import {MemberCreateComponent} from "./member-create/member-create.component";
import {GenreCreateComponent} from "./genre-create/genre-create.component";
import {MemberEditComponent} from "./member-edit/member-edit.component";
import {FilmEditComponent} from "./film-edit/film-edit.component";


const routes: Routes = [
  {path: '', component: FilmCardComponent},
  {path: 'film/:id', component: FilmPostComponent},
  {path: 'member/:id', component: MemberPostComponent},
  {path: 'create_film', component: FilmCreateComponent},
  {path: 'create_member', component: MemberCreateComponent},
  {path: 'create_genre', component: GenreCreateComponent},
  {path: 'edit_member/:id', component: MemberEditComponent},
  {path: 'edit_film/:id', component: FilmEditComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
