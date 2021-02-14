import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      firstName: ["",[Validators.required]],
      lastName: ["",[Validators.required]],
      userName: ["",[Validators.required, Validators.minLength(5)]],
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(7)]],
      passwordReenter:["",[Validators.required, Validators.minLength(7)]]
    })

    this.signUpForm.valueChanges.subscribe(console.log)
  }

  get firstName() {
    return this.signUpForm.get("firstName")
  }

  get lastName() {
    return this.signUpForm.get("lastName")
  }

  get userName(){
    return this.signUpForm.get("userName")
  }

  get email(){
    return this.signUpForm.get("email")
  }  

  get password(){
    return this.signUpForm.get("password")
  }

  get passwordReenter(){
    return this.signUpForm.get("passwordReenter")
  }
}
