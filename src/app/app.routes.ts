import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { DashComponent } from './dashboard/dash.component';
import { NgModule } from '@angular/core';
import { DashComponent } from './dashboard/dash.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dash',
    component: DashComponent,
  },
  // loadChildren: () => import('./english/english.module').then(m => m.EnglishModule)

  {
    path: 'eng',loadChildren: () => import('./english/english.module').then(m => m.EnglishModule)
    // , children: [


      
    //   // { path: '1',component:Eng1Component },
    //   // { path: '2',Eng2Component },
    //   // { path: '3', Eng1Component },
    //   // { path: '4',Eng1Component },
    //   // { path: '5',Eng1Component}


    //   { path: '1', loadChildren: () => import('./english/eng1/english1.module').then(m => m.Eng1) },
    //   { path: '2', loadChildren: () => import('./english/eng2/english2.module').then(m => m.Eng2) },
    //   { path: '3', loadChildren: () => import('./english/eng3/english3.module').then(m => m.Eng3) },
    //   { path: '4', loadChildren: () => import('./english/eng4/english4.module').then(m => m.Eng4) },
    //   { path: '5', loadChildren: () => import('./english/eng5/english5.module').then(m => m.Eng5) }

    // ],

  },

  {
    path: 'maths', loadChildren: () => import('./maths/math.module').then(m => m.MathModule)
  },





  // { path: 'dash', component: DashComponent },
  // { path: 'english', loadChildren: () => import('./english/english.module').then(m => m.EnglishModule) },
  // { path: 'maths', loadChildren: () => import('./maths/math.module').then(m => m.MathsModule) },
  // { path: 'marathi', loadChildren: () => import('./marathi/mar01/mar01.module').then(m => m.MarathiModule) },
  // Add other lazy-loaded modules here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  ],
})
export class AppRoutingModule { }
