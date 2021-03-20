import { Component, OnInit } from '@angular/core';
import { OpenPdf } from '../../shared/models/openpdf.module';

@Component({
  selector: 'app-decretos',
  templateUrl: './decretos.page.html',
  styleUrls: ['./decretos.page.scss'],
})
export class DecretosPage implements OnInit {

  filepath: string = 'decretospresidenciais'
  dec3_12: string = 'Decree-3_12.pdf';
  dec17_09: string = 'Decree-17_09.pdf';
  dec2_12: string = 'Order-2_12-Law.pdf';
  dec11_04: string = 'Petroleum-Taxation-Law-11_04.pdf';
  dec13_04: string = 'Petroleum-Customs-Law-13_04.pdf';
  dec86_18: string = 'Presidential-Decree-86_18.pdf';
  dec52_19: string = 'Presidential-Decree-52_19.pdf';

  constructor(private openpdf:OpenPdf) { }

  ngOnInit() {
  }

  openDec3_12PDF(){
    this.openpdf.openpdf(this.filepath,this.dec3_12);
  }
  openDec17_9PDF(){
    this.openpdf.openpdf(this.filepath,this.dec17_09);
  }
  openDec2_12PDF(){
    this.openpdf.openpdf(this.filepath,this.dec2_12);
  }
  openDec11_04DF(){
    this.openpdf.openpdf(this.filepath,this.dec11_04);
  }
  openDec13_04PDF(){
    this.openpdf.openpdf(this.filepath,this.dec13_04);
  }
  openDec86_18PDF(){
    this.openpdf.openpdf(this.filepath,this.dec86_18);
  }
  openDec52_19PDF(){
    this.openpdf.openpdf(this.filepath,this.dec52_19);
  }

}
