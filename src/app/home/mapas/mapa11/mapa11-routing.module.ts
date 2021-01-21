import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa11Page } from './mapa11.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa11PageRoutingModule {}
