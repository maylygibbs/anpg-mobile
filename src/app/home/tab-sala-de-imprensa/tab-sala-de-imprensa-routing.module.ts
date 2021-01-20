import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSalaDeImprensa } from './tab-sala-de-imprensa.page';

const routes: Routes = [
  {
    path: '',
    component: TabSalaDeImprensa
  },
  {
    path: 'news',
        loadChildren: () => import('./tab-news/tab-news.module').then(m => m.TabNewsModule)
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSalaDeImprensaPageRoutingModule {}
