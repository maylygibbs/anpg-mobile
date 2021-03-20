import { Component, OnInit } from '@angular/core';
import { OpenPdf } from '../shared/models/openpdf.module';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.page.html',
  styleUrls: ['./mapas.page.scss'],
})
export class MapasPage implements OnInit {

  showLoader: boolean;

  filepath: string = 'mapas';
  mapa1: string = '3367-OUT-19-GIS-GAD-MAPA-GERAL-DOS-BLOCOS-DO-KWANZA-DO-CONGO-LICITACAO-2020-1.pdf';
  mapa1_url: string ='https://anpg.co.ao/wp-content/uploads/2020/08/3367-OUT-19-GIS-GAD-MAPA-GERAL-DOS-BLOCOS-DO-KWANZA-DO-CONGO-LICITACAO-2020-1.pdf';
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
    this.showLoader = false;
  }

  showProgressBar() {
    this.showLoader = true;
  }

  hideProgressBar() {
    this.showLoader = false;
  }

  openMapa1PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa1);
    
    /* Para testar localmente*/
/*     console.log(this.showLoader); 
    console.log('vai lançar o progress');
    this.showProgressBar();
    console.log(this.showLoader); 
    const filePath = this.file.dataDirectory + this.mapa1; 
    // for iOS use this.file.documentsDirectory
    this.nativeHTTP.downloadFile(this.mapa1_url, {}, {}, filePath)
      .then(response => {
        console.log('Download success ...', response);
        this.fileOpener.open(response.nativeURL, 'application/pdf')
            .then( _ => { })
            .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
      }).catch(err => {
        // prints 403
        console.log('error block ... ', err.status);
        // prints Permission denied
        console.log('error block ... ', err.error);
        })  */
    /* Para esperar 7 segundos para testar o progress bar */ 
    /* 
    var start = new Date().getTime();
    var end = start;
    while(end < start + 7000) {
      end = new Date().getTime();
    }
    */
   /*  this.hideProgressBar();
    console.log('vai acabar o progress');   
    console.log(this.showLoader);  */
  
    /* Com a implementação da função global*/
    //this.openpdf.downloadpdf(this.mapa1_url);
    
  }

  openMapa2PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa2);
  }
  openMapa3PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa3);
  }
  openMapa4PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa4);
  }
  openMapa5PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa5);
  }
  openMapa6PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa6);
  }
  openMapa7PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa7);
  }
  openMapa8PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa8);
  }
  openMapa9PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa9);
  }
  openMapa10PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa10);
  }
  openMapa11PDF(){
    this.openpdf.openpdf(this.filepath,this.mapa11);
  }

}
