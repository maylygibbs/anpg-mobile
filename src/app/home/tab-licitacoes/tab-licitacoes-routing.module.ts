import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabLicitacoes } from './tab-licitacoes.page';

const routes: Routes = [
  {
    path: '',
    component: TabLicitacoes
  },
  {
    path: 'ano2019',
        loadChildren: () => import('./ano2019/ano2019.module').then(m => m.Ano2019PageModule)
  },  
  {
    path: 'ano2020',
        loadChildren: () => import('./ano2020/ano2020.module').then(m => m.Ano2020PageModule)  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLicitacoesPageRoutingModule {}
