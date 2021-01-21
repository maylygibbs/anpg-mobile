import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa8Page } from './mapa8.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa8PageRoutingModule {}
