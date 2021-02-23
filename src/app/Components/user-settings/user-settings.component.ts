import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { deleteAccount, changeEmail, changeUsername, changePassword, logout, getCurrentUser } from '../../../../services/auth.services.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  deleteAccountForm: FormGroup;
  editEmailForm: FormGroup;
  editUsernameForm: FormGroup;
  editPasswordForm: FormGroup;

  


  constructor(private fb:FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.deleteAccountForm = this.fb.group({
      
    })

    this.editEmailForm = this.fb.group({
      newEmail: ["",[Validators.required, Validators.email]]
    })

    this.editUsernameForm = this.fb.group({
      newUsername: ["",[Validators.required, Validators.minLength(5)]]
    })

    this.editPasswordForm = this.fb.group({
      password: ["",[Validators.required, Validators.minLength(7)]],
      newPassword: ["",[Validators.required, Validators.minLength(7)]],
      newPasswordAgain: ["",[Validators.required, Validators.minLength(7)]]
    })

    // this.editUsernameForm.valueChanges.subscribe(console.log)
  }

  async editPassword(){
    try {
      changePassword(this.editPasswordForm.get("password").value,this.editPasswordForm.get("newPassword").value, this.editPasswordForm.get("newPasswordAgain").value)
      this.router.navigate(['/']);
      } catch (error) {
        // console.log(error)
      }
  }

  async editUsername(){
    // console.log(this.editEmailForm.get("newUserName").value)
    // console.log(getCurrentUser().userName)
    try {
      changeUsername(getCurrentUser().userName,this.editEmailForm.get("newUserName").value)
      this.router.navigate(['/']);
      } catch (error) {
        // console.log(error)
      }
  }

  async editEmail(){
    try {
      changeEmail(getCurrentUser().email,this.editEmailForm.get("newEmail").value)
      this.router.navigate(['/']);
      } catch (error) {
        // console.log(error)
      }
  }

  async deleteAccount(){
    try {
      deleteAccount(getCurrentUser().userName)
      logout()
      this.router.navigate(['/']);
      } catch (error) {
        // console.log(error)
      }
  }

}
