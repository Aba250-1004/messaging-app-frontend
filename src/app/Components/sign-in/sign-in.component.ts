import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { login, getCurrentUser } from '../../../../services/auth.services.js'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  loading = false
  success = false

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: ["",[Validators.required, Validators.minLength(5)]],
      password: ["",[Validators.required, Validators.minLength(7)]]
    })

    this.signInForm.valueChanges.subscribe(console.log)
  }

  get userName(){
    return this.signInForm.get("userName")
  }

  get password(){
    return this.signInForm.get("password")
  }

  async submitHandler(){
    this.loading = true

    try {
      login(this.signInForm.get("userName").value,this.signInForm.get("password").value).then(() =>{
          this.router.navigate(['/']);
          console.log(getCurrentUser())
        })
      } catch (error) {
        console.log(error)
      }
  }
}
