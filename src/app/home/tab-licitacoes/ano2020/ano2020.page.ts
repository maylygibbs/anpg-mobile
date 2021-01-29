import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OpenPdf } from 'src/app/shared/models/openpdf.module';

@Component({
  selector: 'app-ano2020',
  templateUrl: './ano2020.page.html',
  styleUrls: ['./ano2020.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ano2020Page implements OnInit {

  filepath: string = 'lic2020';
  estrategia: string = 'Estratégia de Licitação 2020_VF.pdf';
  requesitos: string = 'Requisitos e Programa do Concurso _Atribuição de Concessões Petroliferas.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {
  }

  OpenEstrategiaPDF(){
    this.openpdf.openpdf(this.filepath,this.estrategia);
  }
  OpenRequisitosPDF(){
    this.openpdf.openpdf(this.filepath,this.requesitos);
  }

}
