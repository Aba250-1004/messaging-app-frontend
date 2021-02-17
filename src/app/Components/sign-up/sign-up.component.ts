import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { register } from '../../../../services/auth.services.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  loading = false
  success = false

  constructor(private fb:FormBuilder, private router:Router) { }

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

  async submitHandler(){
    this.loading = true
    console.log(this.signUpForm.get("firstName").value)

    try {
      register(this.signUpForm.get("firstName").value, this.signUpForm.get("lastName").value,
        this.signUpForm.get("userName").value, this.signUpForm.get("email").value,
        this.signUpForm.get("password").value, this.signUpForm.get("passwordReenter").value)
        this.router.navigate(['/']);
      
    } catch (error) {
      console.log(error)
    }
  }
}
