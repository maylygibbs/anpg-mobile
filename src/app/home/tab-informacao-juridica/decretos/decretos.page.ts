import { Component, OnInit } from '@angular/core';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-decretos',
  templateUrl: './decretos.page.html',
  styleUrls: ['./decretos.page.scss'],
})
export class DecretosPage implements OnInit {

  filepath: string = this.file.applicationDirectory + 'public/assets/pdf/decretospresidenciais';
  dec3_12: string = 'Decree-3_12.pdf';
  dec17_09: string = 'Decree-17_09.pdf';
  dec2_12: string = 'Order-2_12-Law.pdf';
  dec11_04: string = 'Petroleum-Taxation-Law-11_04.pdf';
  dec13_04: string = 'Petroleum-Customs-Law-13_04.pdf';
  dec86_18: string = 'Presidential-Decree-86_18.pdf';
  dec52_19: string = 'Presidential-Decree-52_19.pdf';
  filetype: string = 'application/pdf';

  constructor(private fileOpener: FileOpener, private file: File) { }

  ngOnInit() {
  }

  OpenDec3_12PDF(){
    this.file.copyFile(this.filepath, this.dec3_12, this.file.dataDirectory, this.dec3_12)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenDec17_9PDF(){
    this.file.copyFile(this.filepath, this.dec17_09, this.file.dataDirectory, this.dec17_09)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenDec2_12PDF(){
    this.file.copyFile(this.filepath, this.dec2_12, this.file.dataDirectory, this.dec2_12)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenDec11_04DF(){
    this.file.copyFile(this.filepath, this.dec11_04, this.file.dataDirectory, this.dec11_04)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenDec13_04PDF(){
    this.file.copyFile(this.filepath, this.dec13_04, this.file.dataDirectory, this.dec13_04)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenDec86_18PDF(){
    this.file.copyFile(this.filepath, this.dec86_18, this.file.dataDirectory, this.dec86_18)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenDec52_19PDF(){
    this.file.copyFile(this.filepath, this.dec52_19, this.file.dataDirectory, this.dec52_19)
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
