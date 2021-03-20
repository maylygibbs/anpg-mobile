import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaImprensaPage } from './sala-imprensa.page';

const routes: Routes = [
  {
    path: '',
    component: SalaImprensaPage
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'news-detalhe',
    loadChildren: () => import('./news-detalhe/news-detalhe.module').then( m => m.NewsDetalhePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaImprensaPageRoutingModule {}
