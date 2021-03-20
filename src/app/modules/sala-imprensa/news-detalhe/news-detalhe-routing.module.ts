import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetalhePage } from './news-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDetalhePageRoutingModule {}
