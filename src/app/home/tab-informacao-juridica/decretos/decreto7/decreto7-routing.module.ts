import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto7Page } from './decreto7.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto7PageRoutingModule {}
