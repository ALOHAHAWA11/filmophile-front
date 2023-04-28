import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {NavigationComponent} from './navigation/navigation.component';
import {FilmCardComponent} from './film-card/film-card.component';
import {FilmPostComponent} from './film-post/film-post.component';
import {MemberPostComponent} from './member-post/member-post.component';
import {FilmService} from "./services/film.service";
import { FilmCreateComponent } from './film-create/film-create.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { GenreCreateComponent } from './genre-create/genre-create.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FilmCardComponent,
    FilmPostComponent,
    MemberPostComponent,
    FilmCreateComponent,
    MemberCreateComponent,
    GenreCreateComponent,
    FilmEditComponent,
    MemberEditComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
