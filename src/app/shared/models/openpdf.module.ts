import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // just before your class
})

export class OpenPdf {

    filepath: string = this.file.applicationDirectory + 'public/assets/pdf/';
    filetype: string = 'application/pdf';
    constructor(private platform:Platform, private fileOpener: FileOpener, private file: File, private nativeHTTP:HTTP ){}
    
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

    downloadpdf(url:string){

        let filePath:string;
        var get_name=url.split('/');
        let file:string=get_name[get_name.length-1];
        
        if(this.platform.is('android')){
            filePath = this.file.dataDirectory + file;
        }
        else if(this.platform.is('ios')){
            filePath = this.file.documentsDirectory + file;
        }
        else {
            console.log("Not suported")
            return;
        };

        this.nativeHTTP.downloadFile(url, {}, {}, filePath)
            .then(response => {
                console.log('Download success ...', response);
                this.fileOpener.open(response.nativeURL, this.filetype)
                    .then( _ => { })
                    .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
            }).catch(err => {
                console.log('Error downloading ... ', err.status);
                })           
    }
}