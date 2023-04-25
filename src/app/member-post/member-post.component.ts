// import {Component, OnDestroy, OnInit} from '@angular/core';
// import {Subscription} from "rxjs";
// import {ActivatedRoute, Params} from "@angular/router";
// import {FilmService} from "../services/film.service";
// import {Member} from "../instances/film-member";
//
// @Component({
//   selector: 'app-member-post',
//   templateUrl: './member-post.component.html',
//   styleUrls: ['./member-post.component.css']
// })
// export class MemberPostComponent implements OnInit, OnDestroy {
//   private _subscription$: Subscription = new Subscription();
//   private _id: number = 0;
//   private _member: Member = new Member();
//
//
//   constructor(private _activatedRoute$: ActivatedRoute, private _filmService: FilmService) {
//   }
//
//   ngOnInit(): void {
//     this._activatedRoute$.params.subscribe((params: Params) => {
//       this._id = params['id'];
//     });
//     this._subscription$ = this._filmService.getMemberPost(this._id).subscribe((data: any) => this._member = data);
//   }
//
//   ngOnDestroy() {
//     if (this._subscription$) {
//       this._subscription$.unsubscribe();
//     }
//   }
//
//   get memberPost(): Member {
//     return this._member;
//   }
//
//
// }
