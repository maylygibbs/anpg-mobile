import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacotesdedadosPage } from './pacotesdedados.page';

const routes: Routes = [
  {
    path: '',
    component: PacotesdedadosPage
  },
  {
    path: 'congo',
    loadChildren: () => import('./congo/congo.module').then( m => m.CongoPageModule)
  },
  {
    path: 'kwanza',
    loadChildren: () => import('./kwanza/kwanza.module').then( m => m.KwanzaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacotesdedadosPageRoutingModule {}
