import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacaoJuridicaPage } from './informacao-juridica.page';

const routes: Routes = [
  {
    path: '',
    component: InformacaoJuridicaPage
  },
  {
    path: 'decretos',
    loadChildren: () => import('./decretos/decretos.module').then( m => m.DecretosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacaoJuridicaPageRoutingModule {}
