import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FilmPostComponent} from "./film-post/film-post.component";
import {FilmCardComponent} from "./film-card/film-card.component";
import {MemberPostComponent} from "./member-post/member-post.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path: '', component: FilmCardComponent},
  {path: 'film/:id', component: FilmPostComponent},
  {path: 'member/:id', component: MemberPostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
