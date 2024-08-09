import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { Eng5Component } from './eng5.component';


const routes:Routes=[
{
  path:"",component:Eng5Component

}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class eng5RoutingModule { }
