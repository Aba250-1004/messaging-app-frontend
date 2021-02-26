import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms"
import { checkIfUserNameExists } from '../../../../services/auth.services.js'
import { makeConversationAndMessage } from '../../../../services/message.services.js'

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  errorMessage = ""
  allUsers = []
  currentUser: FormGroup;
  newMessage: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) {
      
      this.currentUser = this.fb.group({
        user: ""
      })

      this.newMessage = this.fb.group({
        msgBody: ""
      })
   }

  ngOnInit(): void {
  }

  createConversation(){
    // console.log(this.allUsers)
    // console.log(this.msgBody.value)
    makeConversationAndMessage(this.allUsers, this.msgBody.value)
    this.router.navigate(['/']);

  }

  get msgBody(){
    return this.newMessage.get("msgBody")
  }

  get user(){
    return this.currentUser.get("user")
  }

  async addUser(){
    // console.log(this.user.value)
    let userExist = await checkIfUserNameExists(this.user.value)
    // console.log(userExist)
    if (userExist.data.userExists){
      this.allUsers.push(this.user.value)
      this.errorMessage = ""
    }else{
      this.errorMessage = "Error Message: " + this.user.value + " does not exist"
    }
    
    this.currentUser.setValue({user:""})
  }
}
