import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { register } from '../../../../services/auth.services.js'
import { resMessage } from '../../../../utilities/function.utilities'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  loading = false
  success = false

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

  async submitHandler(){
    this.loading = true

    try {
      register(this.signUpForm.get("firstName"), this.signUpForm.get("lastName"),
        this.signUpForm.get("userName"), this.signUpForm.get("email"),
        this.signUpForm.get("password"), this.signUpForm.get("passwordReenter") ).then(
                        (response) => {
                          this.success = true
                          console.log(response)
            
                        },
                        (error) => {
                            
                        }
                    )
      
      
    } catch (error) {
      
    }
  }
}
