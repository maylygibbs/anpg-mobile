import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilizadorPage } from './utilizador.page';

const routes: Routes = [
  {
    path: '',
    component: UtilizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilizadorPageRoutingModule {}
