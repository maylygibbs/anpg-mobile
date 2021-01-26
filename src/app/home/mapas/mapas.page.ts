import { Component, OnInit } from '@angular/core';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  filepath: string = this.file.applicationDirectory + 'public/assets/pdf/mapas';
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
  filetype: string = 'application/pdf';

  constructor(private fileOpener: FileOpener, private file: File) { }

  ngOnInit() {
  }

  OpenMapa1PDF(){
    this.file.copyFile(this.filepath, this.mapa1, this.file.dataDirectory, this.mapa1)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa2PDF(){
    this.file.copyFile(this.filepath, this.mapa2, this.file.dataDirectory, this.mapa2)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa3PDF(){
    this.file.copyFile(this.filepath, this.mapa3, this.file.dataDirectory, this.mapa3)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa4PDF(){
    this.file.copyFile(this.filepath, this.mapa1, this.file.dataDirectory, this.mapa4)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa5PDF(){
    this.file.copyFile(this.filepath, this.mapa5, this.file.dataDirectory, this.mapa5)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa6PDF(){
    this.file.copyFile(this.filepath, this.mapa6, this.file.dataDirectory, this.mapa6)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa7PDF(){
    this.file.copyFile(this.filepath, this.mapa7, this.file.dataDirectory, this.mapa7)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa8PDF(){
    this.file.copyFile(this.filepath, this.mapa8, this.file.dataDirectory, this.mapa8)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa9PDF(){
    this.file.copyFile(this.filepath, this.mapa9, this.file.dataDirectory, this.mapa9)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa10PDF(){
    this.file.copyFile(this.filepath, this.mapa10, this.file.dataDirectory, this.mapa10)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenMapa11PDF(){
    this.file.copyFile(this.filepath, this.mapa11, this.file.dataDirectory, this.mapa11)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
}
