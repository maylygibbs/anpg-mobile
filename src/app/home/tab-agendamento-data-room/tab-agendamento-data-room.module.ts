import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabAgendamentoDataRoom } from './tab-agendamento-data-room.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule } from 'ion2-calendar';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,    
    RouterModule.forChild([{ path: '', component: TabAgendamentoDataRoom }]),
    CalendarModule
  ],
  declarations: [TabAgendamentoDataRoom],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT'}]
})
export class TabAgendamentoDataRoomModule {}
