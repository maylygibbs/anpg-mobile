import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa9Page } from './mapa9.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa9PageRoutingModule {}
