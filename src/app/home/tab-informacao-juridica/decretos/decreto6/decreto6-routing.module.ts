import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto6Page } from './decreto6.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto6PageRoutingModule {}
