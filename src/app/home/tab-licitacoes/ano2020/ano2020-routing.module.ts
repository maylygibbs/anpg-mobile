import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ano2020Page } from './ano2020.page';

const routes: Routes = [
  {
    path: '',
    component: Ano2020Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ano2020PageRoutingModule {}
