import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KwanzaPage } from './kwanza.page';

const routes: Routes = [
  {
    path: '',
    component: KwanzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KwanzaPageRoutingModule {}
