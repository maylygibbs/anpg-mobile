import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecretosPage } from './decretos.page';

const routes: Routes = [
  {
    path: '',
    component: DecretosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecretosPageRoutingModule {}
