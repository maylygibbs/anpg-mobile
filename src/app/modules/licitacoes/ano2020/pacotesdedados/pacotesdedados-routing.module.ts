import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacotesdedadosPage } from './pacotesdedados.page';

const routes: Routes = [
  {
    path: '',
    component: PacotesdedadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacotesdedadosPageRoutingModule {}
