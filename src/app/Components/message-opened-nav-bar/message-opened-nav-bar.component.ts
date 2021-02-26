import { Component, OnInit } from '@angular/core';
import { removeCurrentConversation } from '../../../../services/message.services.js'

@Component({
  selector: 'app-message-opened-nav-bar',
  templateUrl: './message-opened-nav-bar.component.html',
  styleUrls: ['./message-opened-nav-bar.component.css']
})
export class MessageOpenedNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    removeCurrentConversation()
  }
}
