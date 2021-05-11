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
        path: 'notif',
        children: [
          {
              path: '',
              loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule)
            }
        ]
      }, {
        path: 'listeRdv',
        children: [
          {
              path: '',
              loadChildren: () => import('./liste-rdv/liste-rdv.module').then( m => m.ListeRdvPageModule)
            }
        ]
      }, {
        path: 'Historique',
        children: [
          {
              path: '',
              loadChildren: () => import('./historique-paie/historique-paie.module').then( m => m.HistoriquePaiePageModule)
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
      {
        path: 'profile',
        redirectTo: 'tabs',
        pathMatch: 'full'
      },
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
    path: 'liste-medecin/:cod_hop',
    loadChildren: () => import('./liste-medecin/liste-medecin.module').then( m => m.ListeMedecinPageModule)
  },

  {
    path: 'liste-hopital',
    loadChildren: () => import('./liste-hopital/liste-hopital.module').then( m => m.ListeHopitalPageModule)
  },
  {
    path: 'fixer-rendezvous/:id',
    loadChildren: () => import('./fixer-rendezvous/fixer-rendezvous.module').then( m => m.FixerRendezvousPageModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./consultation/consultation.module').then( m => m.ConsultationPageModule)
  },
  {
    path: 'payer-rendezvous/:id',
    loadChildren: () => import('./payer-rendezvous/payer-rendezvous.module').then( m => m.PayerRendezvousPageModule)
  },
    {path:'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login-ancien',
    loadChildren: () => import('./login-ancien/login-ancien.module').then( m => m.LoginAncienPageModule)
  },
  {
    path: 'detail-rdv',
    loadChildren: () => import('./detail-rdv/detail-rdv.module').then( m => m.DetailRdvPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
