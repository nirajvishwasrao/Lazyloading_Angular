import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { EngComponent } from './eng/eng.component';

const routes: Routes = [
  {
    path: '',
    component: EngComponent,
    children: [
      { path: '1', loadChildren: () => import('./eng1/english1.module').then(m => m.Eng1) },
      { path: '2', loadChildren: () => import('./eng2/english2.module').then(m => m.Eng2) },
      { path: '3', loadChildren: () => import('./eng3/english3.module').then(m => m.Eng3) },
      { path: '4', loadChildren: () => import('./eng4/english4.module').then(m => m.Eng4) },
      { path: '5', loadChildren: () => import('./eng5/english5.module').then(m => m.Eng5) }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [
  ],
})
export class AppRoutingModule { }
