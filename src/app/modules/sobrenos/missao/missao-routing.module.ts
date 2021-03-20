import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissaoPage } from './missao.page';

const routes: Routes = [
  {
    path: '',
    component: MissaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissaoPageRoutingModule {}
