import { Component, OnInit } from '@angular/core';
import { removeCurrentConversation } from '../../../../services/message.services.js'

@Component({
  selector: 'app-settings-message-nav-bar',
  templateUrl: './settings-message-nav-bar.component.html',
  styleUrls: ['./settings-message-nav-bar.component.css']
})
export class SettingsMessageNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    removeCurrentConversation()
  }
}
