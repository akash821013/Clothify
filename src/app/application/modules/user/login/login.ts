import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {


  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
  }

  registerForm: FormGroup = new FormGroup({});

  // constructor() {
  //   this.registerForm = new FormGroup({});
  // }
  ngOnInit() {
    this.registerForm.reset();

    this.registerForm = new FormGroup({
      userid: new FormControl('', { validators: Validators.compose([Validators.required, Validators.email]) }),
      password: new FormControl('', { validators: Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)]) }),
    });
  }
}
