import { Component, OnInit } from '@angular/core';
import { OpenPdf } from '../shared/models/openpdf.module';

@Component({
  selector: 'app-informacao-juridica',
  templateUrl: './informacao-juridica.page.html',
  styleUrls: ['./informacao-juridica.page.scss'],
})
export class InformacaoJuridicaPage implements OnInit {

  filepath: string = 'decretospresidenciais';
  quadrolegal: string = 'Lei_10_04.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {
  }

  openQuadroLegalPDF(){
    this.openpdf.openpdf(this.filepath,this.quadrolegal);
  }

}
