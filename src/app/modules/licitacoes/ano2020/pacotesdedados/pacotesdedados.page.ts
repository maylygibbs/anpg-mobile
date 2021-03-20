import { Component, OnInit } from '@angular/core';
import { OpenPdf } from '../../../../modules/shared/models/openpdf.module';


@Component({
  selector: 'app-pacotesdedados',
  templateUrl: './pacotesdedados.page.html',
  styleUrls: ['./pacotesdedados.page.scss'],
})
export class PacotesdedadosPage implements OnInit {

  filepath: string = 'lic2020pacotedados';
  congofile: string = 'Data_pack_CON_CONTENT_LIST.pdf';
  Kwanzafile: string = 'Data_pack_KON_CONTENT_LIST.pdf';
  Atlasfile: string = 'ATLAS_CONTENT_LICITACAO2020_Final.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {
  }

  openCongoPDF(){
    this.openpdf.openpdf(this.filepath,this.congofile);
  }
  openKwanzaPDF(){
    this.openpdf.openpdf(this.filepath,this.Kwanzafile);
  }
  openAtlasPDF(){
    this.openpdf.openpdf(this.filepath,this.Atlasfile);
  }

}
