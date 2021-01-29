import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { OpenPdf } from 'src/app/shared/models/openpdf.module';

@Component({
  selector: 'app-tab-informacao-juridica',
  templateUrl: 'tab-informacao-juridica.page.html',
  styleUrls: ['tab-informacao-juridica.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabInformacaoJuridica {
    
  filepath: string = 'decretospresidenciais';
  quadrolegal: string = 'Lei_10_04.pdf';

  constructor(private openpdf:OpenPdf) { }

  OpenQuadroLegalPDF(){
    this.openpdf.openpdf(this.filepath,this.quadrolegal);
  }

}
