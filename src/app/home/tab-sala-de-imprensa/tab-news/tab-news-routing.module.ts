import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNews } from './tab-news.page';

const routes: Routes = [
  {
    path: '',
    component: TabNews
  },
  /* TODO a ver se isto se poe */
 /*{
    path: 'news-detalhe',
        loadChildren: () => import('../tab-news-detalhe/tab-news-detalhe.module').then(m => m.TabNewsDetalheModule)
  }, */ 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNewsPageRoutingModule {}
