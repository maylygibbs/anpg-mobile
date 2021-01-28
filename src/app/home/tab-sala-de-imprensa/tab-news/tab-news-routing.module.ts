import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNews } from './tab-news.page';

const routes: Routes = [
  {
    path: '',
    component: TabNews
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNewsPageRoutingModule {}
