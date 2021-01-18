import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConselhoadministracaoPage } from './conselhoadministracao.page';

const routes: Routes = [
  {
    path: '',
    component: ConselhoadministracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConselhoadministracaoPageRoutingModule {}
