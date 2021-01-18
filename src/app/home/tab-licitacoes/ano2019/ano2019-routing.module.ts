import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ano2019Page } from './ano2019.page';

const routes: Routes = [
  {
    path: '',
    component: Ano2019Page
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ano2019PageRoutingModule {}
