import { Component, OnInit } from '@angular/core';
import { getCurrentUser, logout } from '../../../../services/auth.services.js'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  loading = false
  currentUser = {}
  logOutForm: FormGroup;
  userSettings: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = getCurrentUser()
    this.logOutForm = this.fb.group({
      
    })

    this.userSettings = this.fb.group({
      
    })
  }

  async logOut(){
    this.loading = true

    try {
      logout()
      this.router.navigate(['/']);
      } catch (error) {
        // console.log(error)
      }
  }

  userSettingsClick(){
    this.loading = true

    try {
      this.router.navigate(['/settings/user-settings']);
      } catch (error) {
        // console.log(error)
      }
  }

  

}
