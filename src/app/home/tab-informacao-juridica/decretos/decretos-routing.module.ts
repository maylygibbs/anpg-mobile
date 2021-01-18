import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecretosPage } from './decretos.page';

const routes: Routes = [
  {
    path: '',
    component: DecretosPage
  },
  {
    path: 'decreto1',
    loadChildren: () => import('./decreto1/decreto1.module').then( m => m.Decreto1PageModule)
  },
  {
    path: 'decreto2',
    loadChildren: () => import('./decreto2/decreto2.module').then( m => m.Decreto2PageModule)
  },
  {
    path: 'decreto3',
    loadChildren: () => import('./decreto3/decreto3.module').then( m => m.Decreto3PageModule)
  },
  {
    path: 'decreto4',
    loadChildren: () => import('./decreto4/decreto4.module').then( m => m.Decreto4PageModule)
  },
  {
    path: 'decreto5',
    loadChildren: () => import('./decreto5/decreto5.module').then( m => m.Decreto5PageModule)
  },
  {
    path: 'decreto6',
    loadChildren: () => import('./decreto6/decreto6.module').then( m => m.Decreto6PageModule)
  },
  {
    path: 'decreto7',
    loadChildren: () => import('./decreto7/decreto7.module').then( m => m.Decreto7PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecretosPageRoutingModule {}
