import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // just before your class
})

export class OpenPdf {

    filepath: string = this.file.applicationDirectory + 'public/assets/pdf/';
    filetype: string = 'application/pdf';
    constructor(private platform:Platform, private fileOpener: FileOpener, private file: File){}
    
    openpdf(path:string,file:string){

        if(this.platform.is('android')){
            this.file.copyFile(this.filepath +'/'+ path, file, this.file.dataDirectory, file)
                .then( result => {
                    this.fileOpener.open(result.nativeURL, this.filetype)
                    .then( _ => { })
                    .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
                })
                .catch( e => {
                    console.log("Error copying file: " + JSON.stringify(e));
            });
        }
        else if(this.platform.is('ios')){
            this.fileOpener.open(this.filepath+'/'+path+'/'+file, this.filetype)
            .then( _ => { })
            .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
        }
        else console.log("Not suported");
    }
}