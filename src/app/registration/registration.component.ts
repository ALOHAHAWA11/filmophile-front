import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private _form: FormGroup;

  constructor() {
    this._form = new FormGroup({
      login: new FormControl("", Validators.required),
      pass: new FormControl("", [Validators.required, Validators.minLength(9)])
    })
  }

  ngOnInit(): void {
  }

  public get form(): FormGroup {
    return this._form;
  }

  public submitForm() {
    if (this._form.valid) {

    }
  }
}
