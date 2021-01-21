import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa4Page } from './mapa4.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa4PageRoutingModule {}
