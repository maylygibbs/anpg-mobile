import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSalaDeImprensa } from './tab-sala-de-imprensa.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabSalaDeImprensaPageRoutingModule } from './tab-sala-de-imprensa-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,   
    SharedModule, 
    TabSalaDeImprensaPageRoutingModule,
    RouterModule.forChild([{ path: '', component: TabSalaDeImprensa }])
  ],
  declarations: [TabSalaDeImprensa]
})
export class TabSalaDeImprensaModule {}
