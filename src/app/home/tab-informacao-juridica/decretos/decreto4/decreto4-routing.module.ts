import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto4Page } from './decreto4.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto4PageRoutingModule {}
