import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Decreto5PageRoutingModule } from './decreto5-routing.module';

import { Decreto5Page } from './decreto5.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Decreto5PageRoutingModule
  ],
  declarations: [Decreto5Page]
})
export class Decreto5PageModule {}
