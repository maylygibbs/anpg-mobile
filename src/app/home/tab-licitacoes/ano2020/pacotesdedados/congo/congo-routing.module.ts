import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongoPage } from './congo.page';

const routes: Routes = [
  {
    path: '',
    component: CongoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongoPageRoutingModule {}
