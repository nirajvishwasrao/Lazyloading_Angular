import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { Eng4Component } from './eng4.component';


const routes:Routes=[
{
  path:"",component:Eng4Component

}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class eng4RoutingModule { }
