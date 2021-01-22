import { Component, OnInit } from '@angular/core';

import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
const { Filesystem, Storage } = Plugins;

@Component({
  selector: 'app-pacotesdedados',
  templateUrl: './pacotesdedados.page.html',
  styleUrls: ['./pacotesdedados.page.scss'],
})
export class PacotesdedadosPage implements OnInit {

  kwanzaPDF = 'https://anpg.co.ao/wp-content/uploads/2021/01/Data_pack_CON_CONTENT_LIST.pdf';

  private convertBlobToBase64 = (blob: Blob) => new Promise ((resolve, reject) =>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
  
  constructor(private http:HttpClient, private fileOpener: FileOpener) { }

  ngOnInit() {
  }

 /*  getKwanza2020(){
    window.open("https://anpg.co.ao/wp-content/uploads/2021/01/Data_pack_CON_CONTENT_LIST.pdf", '_system');
  } */
  OpenKwanzaPDF(){
/* 
    const httpOptions = {
      responseType:'blob',
      observe: 'events',
      headers: new HttpHeaders(
        { 
          'Access-Control-Allow-Origin': '*'
        })
    };   */


   /*  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // para evitar o erro de CORS

    this.http.get(proxyurl+this.kwanzaPDF, {
      responseType:'blob',
      observe: 'events'
    }).subscribe(async event =>{
      if (event.type === HttpEventType.Response){
        const name = this.kwanzaPDF.substr(this.kwanzaPDF.lastIndexOf('/')+1);
        const base64 = await this.convertBlobToBase64(event.body) as string;

        const savedFile = await Filesystem.writeFile({
          path: name,
          data: base64,
          directory: FilesystemDirectory.Documents,
        });

        const path = savedFile.uri;
        console.log(path);
        this.fileOpener.open(path,'application/pdf').then(()=> console.log('Abriu')).catch(error=>console.log('Nao abriu ',error));
 */
console.log("Tentar usar o fileopener para abrir o podf");
    this.fileOpener.open('/assets/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu com /')).catch(error=>console.log('Nao abriu com /',error));
    this.fileOpener.open('assets/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu sem /')).catch(error=>console.log('Nao abriu em /',error));
        /* Storage.set({
          key: FILE_KEY,
          value: JSON.stringify(this.myFiles)
        }); */
      }
}
