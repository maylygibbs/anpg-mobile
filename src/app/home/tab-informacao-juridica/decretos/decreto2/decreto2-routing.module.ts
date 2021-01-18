import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto2Page } from './decreto2.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto2PageRoutingModule {}
