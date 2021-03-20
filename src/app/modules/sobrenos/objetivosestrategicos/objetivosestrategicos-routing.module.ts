import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivosestrategicosPage } from './objetivosestrategicos.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivosestrategicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivosestrategicosPageRoutingModule {}
