import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

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

}
