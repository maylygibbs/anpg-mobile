import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabAgendamentoDataRoom } from './tab-agendamento-data-room.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: TabAgendamentoDataRoom }])
  ],
  declarations: [TabAgendamentoDataRoom]
})
export class TabAgendamentoDataRoomModule {}
