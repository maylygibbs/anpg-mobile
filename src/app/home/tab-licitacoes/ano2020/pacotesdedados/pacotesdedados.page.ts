import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-pacotesdedados',
  templateUrl: './pacotesdedados.page.html',
  styleUrls: ['./pacotesdedados.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PacotesdedadosPage implements OnInit {

  filepath: string = this.file.applicationDirectory + 'public/assets/pdf/lic2020pacotedados';
  congofile: string = 'Data_pack_CON_CONTENT_LIST.pdf';
  Kwanzafile: string = 'Data_pack_KON_CONTENT_LIST.pdf';
  filetype: string = 'application/pdf';

  constructor(private fileOpener: FileOpener, private file: File) { }

  ngOnInit() {
  }
  OpenCongoPDF(){
    this.file.copyFile(this.filepath, this.congofile, this.file.dataDirectory, this.congofile)
    .then( result => {
        this.fileOpener.open(result.nativeURL, this.filetype)
        .then( _ => { })
        .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
    })
    .catch( e => {
        console.log("Error copying file: " + JSON.stringify(e));
  });
  }
  OpenKwanzaPDF(){
    this.file.copyFile(this.filepath, this.Kwanzafile, this.file.dataDirectory, this.Kwanzafile)
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
