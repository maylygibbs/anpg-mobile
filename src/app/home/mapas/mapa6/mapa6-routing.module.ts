import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa6Page } from './mapa6.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa6PageRoutingModule {}
