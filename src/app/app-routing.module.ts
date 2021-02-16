import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { NewMessageComponent } from './Components/new-message/new-message.component'

const routes: Routes = [
  {path: "signup", component:SignUpComponent},
  {path: "login", component:SignInComponent},
  {path: "settings", component:SettingsComponent},
  {path: "newMessage", component:NewMessageComponent},
  {path: "", component:HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

