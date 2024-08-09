import { NgModule } from '@angular/core';
import {  Routes,RouterModule, RouteReuseStrategy } from '@angular/router';
import { Eng1Component } from './eng1.component';



const routes:Routes=[
{
  path:"",component:Eng1Component
  

  
}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
})
export class eng1RoutingModule { }
