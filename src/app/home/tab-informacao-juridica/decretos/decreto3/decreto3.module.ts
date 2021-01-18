import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto3PageRoutingModule } from './decreto3-routing.module';

import { Decreto3Page } from './decreto3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto3PageRoutingModule
  ],
  declarations: [Decreto3Page]
})
export class Decreto3PageModule {}
