import { Component, OnInit } from '@angular/core';
import { viewCurrentConversation, getCurrentConversation } from '../../../../services/message.services.js'
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms"
import { getCurrentUser } from '../../../../services/auth.services.js'
import { sendMessageToExistingGroup } from '../../../../services/message.services.js'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setItem } from '../../../../utilities/localStorage.utilities.js';
import { UrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-message-opened',
  templateUrl: './message-opened.component.html',
  styleUrls: ['./message-opened.component.css']
})
export class MessageOpenedComponent implements OnInit {

  messages = {}
  userMessages = []
  isMessageFromCurrentUser = []
  createdAts = []
  messageFromUsers = []

  newMessage: FormGroup;

  constructor(private fb:FormBuilder, private router: Router) { 
    this.newMessage = this.fb.group({
      msgBody: ""
    })
  }

  ngOnInit(): void {
    this.getConversation()
  }
  async getConversation(){
    let observable$ = Observable.create( ( observer ) => {
      viewCurrentConversation()
      .then( ( response ) => {
          observer.next( response.data );
          // console.log(response)
          this.messages = response.data

          observer.complete();
      } )
      .catch( ( error ) => {
          observer.error( error );
      } );
  } );
    let subscription = observable$.subscribe( {
        next: data => console.log(),
        complete: data => {
          for(let i = this.messages["messages"].length - 1; i >= 0;i--){
            this.userMessages.push(this.messages["messages"][i].msgBody)
            this.createdAts.push((this.messages["messages"][i].createdAt.substring(0, this.messages["messages"][i].createdAt.indexOf('.'))))
            
            // console.log("begining of loop")
            // console.log(this.messages["messages"][i])
            for (let user of this.messages["userNames"]){
              // console.log("--------")
              // console.log(user)
              if (user.id == this.messages["messages"][i].fromUserId){
                this.messageFromUsers.push(user.userName)
              }
            }
            // console.log(this.messageFromUsers)
            this.isMessageFromCurrentUser = []
            for (let userName of this.messageFromUsers){
              // console.log(userName+" vs "+ getCurrentUser().userName)
              if (userName != getCurrentUser().userName){
                this.isMessageFromCurrentUser.push(false)
              }else{
                this.isMessageFromCurrentUser.push(true)
              }
            }
            // console.log(this.isMessageFromCurrentUser)
          }
          
        } 
        
    } );
  }
  get msgBody(){
    return this.newMessage.get("msgBody")
  }

  sendMessage(){
    // console.log(this.msgBody.value)
    let allUsers = []
    for(let user of this.messages["userNames"]){
      if (user.id != getCurrentUser().id){
        allUsers.push(user.userName)
      }
    } 
    sendMessageToExistingGroup(allUsers, this.msgBody.value).then(()=> {
      this.newMessage.setValue({msgBody:""})
      this.router.navigate(['/']);
    })
    
  }
}
