import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import { Router, RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }
