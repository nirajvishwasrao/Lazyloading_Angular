import { NgModule } from '@angular/core';
import {  Routes,RouterModule } from '@angular/router';
import { MathsComponent } from './mat/maths.component';
import { MAT02Component } from './mat02/mat02.component';
import { MAT03Component } from './mat03/mat03.component';
import { MAT04Component } from './mat04/mat04.component';
import { MAT01Component } from './mat01/mat01.component';


const routes:Routes=[
{
  path:"",component:MathsComponent,children:[
    {
      path: 'mat02',
      component: MAT02Component,
    },
    {
      path: 'mat03',
      component: MAT03Component,
    },
    {
      path: 'mat04',
      component: MAT04Component
    },
    {
      path: 'mat01',
      component: MAT01Component
    }

  ]
}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class MathRoutingModule { }
