import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { login } from '../../../../services/auth.services.js'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  loading = false
  success = false

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: "",
      password: "",
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
      login(this.signInForm.get("userName"),this.signInForm.get("password")).then(
        (response) => {
          this.success = true
          console.log(response)    
        },(error) => {
                            
        })
      } catch (error) {
        
      }
  }
}
