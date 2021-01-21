import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa10Page } from './mapa10.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa10PageRoutingModule {}
