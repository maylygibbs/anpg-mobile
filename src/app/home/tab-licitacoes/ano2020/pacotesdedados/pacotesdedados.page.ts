import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Plugins, FilesystemDirectory } from '@capacitor/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
const { Filesystem, Storage } = Plugins;

@Component({
  selector: 'app-pacotesdedados',
  templateUrl: './pacotesdedados.page.html',
  styleUrls: ['./pacotesdedados.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  
  constructor(private http:HttpClient, private fileOpener: FileOpener/*,private filePath: FilePath*/,private file: File) { }

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
/* console.log("Tentar usar o filePath");

this.filePath.resolveNativePath('/assets')
  .then(filePath => () => {
    console.log(filePath);
    this.fileOpener.open(filePath+'/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu com /')).catch(error=>console.log('Nao abriu com /',error));
  })
  .catch(err => console.log(err)); */
console.log("Tentar usar o fileopener para abrir o pdf");
this.fileOpener.open(this.file.applicationDirectory+'assets/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu com /')).catch(error=>console.log('Nao abriu com /',error));

/* console.log("Tentar usar o filePath v2");
this.filePath.resolveNativePath('assets')
.then(filePath => () => {
  console.log(filePath);
  this.fileOpener.open(filePath+'/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu com /')).catch(error=>console.log('Nao abriu com /',error));
}) 
  .catch(err => console.log(err));*/
console.log("Tentar usar o fileopener para abrir o pdf v2");
this.fileOpener.open(this.file.applicationDirectory+'/assets/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abri sem /')).catch(error=>console.log('Nao abriu sem /',error));

/* this.fileOpener.open('/assets/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu com /')).catch(error=>console.log('Nao abriu com /',error));
this.fileOpener.open('assets/pdf/Data_pack_CON_CONTENT_LIST.pdf','application/pdf').then(()=> console.log('Abriu sem /')).catch(error=>console.log('Nao abriu sem /',error));
 */        /* Storage.set({
          key: FILE_KEY,
          value: JSON.stringify(this.myFiles)
        }); */
        console.log("Tentar usar o fileopener para abrir o pdf v3");
        this.file.copyFile(this.file.applicationDirectory + 'www/assets/pdf/', "Data_pack_CON_CONTENT_LIST.pdf", this.file.externalCacheDirectory, "Data_pack_CON_CONTENT_LIST.pdf")
        .then( _ => {
            this.fileOpener.open(this.file.externalCacheDirectory + "Data_pack_CON_CONTENT_LIST.pdf", 'application/pdf')
            .then( _ => {
                console.log('File opened');
            })
            .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
         })
         .catch( e => {
            console.log("Error copying file: " + JSON.stringify(e));
         });

         console.log("Tentar usar o fileopener para abrir o pdf v4");
         this.file.copyFile(this.file.applicationDirectory + 'www/assets/pdf/', "Data_pack_CON_CONTENT_LIST.pdf", this.file.dataDirectory, "Data_pack_CON_CONTENT_LIST.pdf")
         .then( result => {
             this.fileOpener.open(result.nativeURL, 'application/pdf')
             .then( _ => {
                 console.log('File opened');
             })
             .catch(e => console.log("Error opening file: " + JSON.stringify(e)));
          })
          .catch( e => {
             console.log("Error copying file: " + JSON.stringify(e));
          });

      }
}
