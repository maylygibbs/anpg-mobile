import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ano2020Page } from './ano2020.page';

const routes: Routes = [
  {
    path: '',
    component: Ano2020Page
  },
  {
    path: 'pacotesdedados',
    loadChildren: () => import('./pacotesdedados/pacotesdedados.module').then( m => m.PacotesdedadosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ano2020PageRoutingModule {}
