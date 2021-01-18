import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto1Page } from './decreto1.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto1PageRoutingModule {}
