import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa7Page } from './mapa7.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa7PageRoutingModule {}
