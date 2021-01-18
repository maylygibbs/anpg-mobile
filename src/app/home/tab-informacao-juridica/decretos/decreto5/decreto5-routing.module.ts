import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto5Page } from './decreto5.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto5PageRoutingModule {}
