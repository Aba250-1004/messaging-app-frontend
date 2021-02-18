import { Component, OnInit } from '@angular/core';
import { getCurrentUser } from '../../../../services/auth.services.js'
import { viewConversations } from '../../../../services/message.services.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser = {}
  messages = []

  constructor() { 
    this.messages = viewConversations()
  }

  ngOnInit(): void {
    this.currentUser = getCurrentUser()
  }

}
