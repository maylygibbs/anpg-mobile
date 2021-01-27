import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { OpenPdf } from '../../../../shared/models/openpdf.module';

@Component({
  selector: 'app-pacotesdedados',
  templateUrl: './pacotesdedados.page.html',
  styleUrls: ['./pacotesdedados.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PacotesdedadosPage implements OnInit {

  filepath: string = 'lic2020pacotedados';
  congofile: string = 'Data_pack_CON_CONTENT_LIST.pdf';
  Kwanzafile: string = 'Data_pack_KON_CONTENT_LIST.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {
  }
  OpenCongoPDF(){
    this.openpdf.openpdf(this.filepath,this.congofile);
  }
  OpenKwanzaPDF(){
    this.openpdf.openpdf(this.filepath,this.Kwanzafile);
  }
}
