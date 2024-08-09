import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { Eng3Component } from './eng3.component';


const routes:Routes=[
{
  path:"",component:Eng3Component

}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class eng3RoutingModule { }
