import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SalaImprensaPageRoutingModule } from './sala-imprensa-routing.module';
import { SalaImprensaPage } from './sala-imprensa.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    SalaImprensaPageRoutingModule
  ],
  declarations: [SalaImprensaPage]
})
export class SalaImprensaPageModule { }
