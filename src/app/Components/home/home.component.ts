import { Component, Injectable, OnInit } from '@angular/core';
import { getCurrentUser } from '../../../../services/auth.services.js'
import { viewConversations } from '../../../../services/message.services.js'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { setItem } from '../../../../utilities/localStorage.utilities.js';


@Injectable()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser = {}
  messages = {}
  userMessages = []
  usersInMessage = []
  createdAts = []
  ids = []

  
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getConversations()
  }

  async getConversations(){
    let observable$ = Observable.create( ( observer ) => {
      viewConversations()
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
          // console.log(this.messages)
          this.currentUser = getCurrentUser()
          for (let value of this.messages["usernames"]){
            var index = value.indexOf(getCurrentUser().userName);
            if (index !== -1) {
              value.splice(index, 1);
            }
            this.usersInMessage.push(value)
          } 

          // for (let i = this.messages["usernames"].length - 1; i >= 0; i--){
          //   var index = this.messages["usernames"][i].indexOf(getCurrentUser().userName);
          //   console.log("here")
          //   console.log(index)
          //   if (index !== -1) {
          //     this.messages["usernames"][i].splice(index, 1);
          //   }
          //   this.usersInMessage.push(this.messages["usernames"][i])
          // }

          // for (let i = this.messages["messages"]; i >= 0; i--){
          //   this.userMessages.push(this.messages["messages"][i].msgBody)
          //   this.createdAts.push((this.messages["messages"][i].createdAt.substring(0, this.messages["messages"][i].createdAt.indexOf('.'))))

          // }
          // for (let value of this.messages["messages"]){
            
          //   this.userMessages.push(value.msgBody)
            

          // }

          for(let i = this.messages["messages"].length - 1; i >= 0 ; i--){
            this.userMessages.push(this.messages["messages"][i].msgBody)
          }

          // console.log(this.messages["conversationIds"])
          for (let i = 0; i < this.messages["conversationIds"].length; i++){
            this.ids.push(this.messages["conversationIds"][i])
            this.createdAts.push((this.messages["lastMessageTime"][i].substring(0, this.messages["lastMessageTime"][i].indexOf('.'))))
          }
        } 
    } );
  }

  handleDivClick(id){
    // console.log([...userNames, getCurrentUser().userName])
    // console.log(id)
  
      //call our setItem funciton and pass in 'user' and response.data
    setItem('conversationId', id);
    this.router.navigate(['/messageOpened']);
  }

}
