import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  },
     /* {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      },*/
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
  {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'liste-medecin',
    loadChildren: () => import('./liste-medecin/liste-medecin.module').then( m => m.ListeMedecinPageModule)
  },

  {
    path: 'liste-hopital',
    loadChildren: () => import('./liste-hopital/liste-hopital.module').then( m => m.ListeHopitalPageModule)
  },  {
    path: 'fixer-rendezvous',
    loadChildren: () => import('./fixer-rendezvous/fixer-rendezvous.module').then( m => m.FixerRendezvousPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
