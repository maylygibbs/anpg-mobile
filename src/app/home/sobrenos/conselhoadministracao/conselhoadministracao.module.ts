import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConselhoadministracaoPageRoutingModule } from './conselhoadministracao-routing.module';

import { ConselhoadministracaoPage } from './conselhoadministracao.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ConselhoadministracaoPageRoutingModule
  ],
  declarations: [ConselhoadministracaoPage]
})
export class ConselhoadministracaoPageModule {}
