import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Decreto3Page } from './decreto3.page';

const routes: Routes = [
  {
    path: '',
    component: Decreto3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Decreto3PageRoutingModule {}
