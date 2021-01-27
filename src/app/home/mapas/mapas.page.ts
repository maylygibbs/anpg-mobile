import { Component, OnInit } from '@angular/core';

import { OpenPdf } from '../../shared/models/openpdf.module';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  filepath: string = 'mapas';
  mapa1: string = '3367-OUT-19-GIS-GAD-MAPA-GERAL-DOS-BLOCOS-DO-KWANZA-DO-CONGO-LICITACAO-2020-1.pdf';
  mapa2: string = 'MAPA-DE-POÇOS-E-SISMICA-DO-CONGO-ONSHORE-LICITAÇÃO-2020.pdf';
  mapa3: string = 'MAPA-DE-POÇOS-E-SISMICA-DO-KWANZA-ONSHORE-LICITAÇÃO-2020.pdf';
  mapa4: string = 'GAD202101-DMC0002-POR_18012020.pdf';
  mapa5: string = 'COMPANHIAS-DE-PETRÓLEO-.pdf';
  mapa6: string = 'COMPARATIVE-BASIN-STRATIGRAPHY-CONGO-1-1.pdf';
  mapa7: string = 'GAD202009-DGH0002-P-HISTÓRICO-DE-PRODUÇA-O-.pdf';
  mapa8: string = 'PROGRAMA-LICITAÇÃO-2019-2025-.pdf';
  mapa9: string = 'MAPA-DE-SÍSMICA-2D-.pdf';
  mapa10: string = 'MAPA-DE-SÍSMICA-3D-.pdf';
  mapa11: string = 'MAPA-GERAL-DO-NAMIBE-.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {
  }

  OpenMapa1PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa1);
  }
  OpenMapa2PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa2);
  }
  OpenMapa3PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa3);
  }
  OpenMapa4PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa4);
  }
  OpenMapa5PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa5);
  }
  OpenMapa6PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa6);
  }
  OpenMapa7PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa7);
  }
  OpenMapa8PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa8);
  }
  OpenMapa9PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa9);
  }
  OpenMapa10PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa10);
  }
  OpenMapa11PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa11);
  }
}
