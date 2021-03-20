import { Component, OnInit } from '@angular/core';
import { OpenPdf } from '../../shared/models/openpdf.module';

@Component({
  selector: 'app-ano2020',
  templateUrl: './ano2020.page.html',
  styleUrls: ['./ano2020.page.scss'],
})
export class Ano2020Page implements OnInit {

  filepath: string = 'lic2020';
  estrategia: string = 'Estratégia de Licitação 2020_VF.pdf';
  requesitos: string = 'Requisitos e Programa do Concurso _Atribuição de Concessões Petroliferas.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {}

  openEstrategiaPDF(){
    this.openpdf.openpdf(this.filepath,this.estrategia);
  }
  openRequisitosPDF(){
    this.openpdf.openpdf(this.filepath,this.requesitos);
  }

}
