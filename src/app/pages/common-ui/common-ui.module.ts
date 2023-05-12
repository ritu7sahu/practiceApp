import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from './address-card/address-card.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CurrentUsersComponent } from './current-users/current-users.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { Router, RouterModule, Routes } from "@angular/router";
const routes : Routes = [
  {
    path:'contactus',
    component: ContactUsComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  }
  ,
  {
    path: 'currentUsers',
    component: CurrentUsersComponent
  }
]
@NgModule({
  declarations: [
    AddressCardComponent,
    AboutUsComponent,
    ContactUsComponent,
    CurrentUsersComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CommonUiModule { }
