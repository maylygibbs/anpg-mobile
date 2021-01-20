import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabInformacaoJuridica } from './tab-informacao-juridica.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabInformacaoJuridicaPageRoutingModule} from './tab-informacao-juridica-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TabInformacaoJuridicaPageRoutingModule,

    RouterModule.forChild([{ path: '', component: TabInformacaoJuridica }])
  ],
  declarations: [TabInformacaoJuridica]
})
export class TabInformacaoJuridicaModule {}
