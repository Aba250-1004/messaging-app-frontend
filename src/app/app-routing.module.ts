import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';

const routes: Routes = [
  {path: "signup", component:SignUpComponent},
  {path: "login", component:SignInComponent},
  {path: "", component:HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

