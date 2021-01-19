import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa5Page } from './mapa5.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa5PageRoutingModule {}
