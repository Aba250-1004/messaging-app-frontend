import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms"
import {  } from '../../../../services/auth.services.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  listOfUsers: FormGroup;
  newMessage: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) {
      

      this.listOfUsers = this.fb.group({
        users: this.fb.array([])
      })

      this.newMessage = this.fb.group({
        msgBody: ""
      })
   }

  ngOnInit(): void {
  }

  createConversation(){

  }

  get msgBody(){
    return this.newMessage.get("msgBody")
  }



  get userForm(){
    return this.listOfUsers.get("users") as FormArray
  }

  addUser(){
    const user = this.fb.group({
      userName: [""]
    })
    

    this.userForm.push(user)
  }

  deleteUser(i){
    this.userForm.removeAt(i)
  }
}
