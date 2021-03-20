import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgendaDataRoomPageRoutingModule } from './agenda-data-room-routing.module';
import { AgendaDataRoomPage } from './agenda-data-room.page';
import { SharedModule } from '../shared/shared.module';
import { CalendarModule } from 'ion2-calendar';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CalendarModule,
    AgendaDataRoomPageRoutingModule
  ],
  declarations: [AgendaDataRoomPage],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }]
})
export class AgendaDataRoomPageModule { }
