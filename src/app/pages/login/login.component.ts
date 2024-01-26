import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public authService: AuthService, private router: Router) {
  }
  loginForm = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ]),
  })

  login(){
    if(this.loginForm.status === "INVALID") {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('');
      },
      error: (err) => {
        // console.error(err);
      }
    })
  }
  get email() {
    return this.loginForm.controls.email as FormControl;
  }
  get password() {
    return this.loginForm.controls.password as FormControl;
  }
}
