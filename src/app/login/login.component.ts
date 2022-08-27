import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public login(form: NgForm) {
    console.log(form);
  }

}
