import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDataRoomPage } from './agenda-data-room.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDataRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDataRoomPageRoutingModule {}
