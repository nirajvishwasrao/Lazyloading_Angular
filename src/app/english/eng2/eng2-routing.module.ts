import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { Eng2Component } from './eng2.component';


const routes:Routes=[
{
  path:"",component:Eng2Component

}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class eng2RoutingModule { }
