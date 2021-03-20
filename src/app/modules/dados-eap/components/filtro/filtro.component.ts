import { Component, OnInit } from '@angular/core';
import { Bacia } from '../../../shared/models/bacia';
import { Bloco } from '../../../shared/models/bloco';
import { Empresa } from '../../../shared/models/empresa';
import { EmpresaService } from '../../../shared/services/empresa.service';
import { ComunsService } from '../../../shared/services/comuns.service';
import { BaciaService } from '../../../shared/services/bacia.service';
import { BlocoService } from '../../../shared/services/bloco.service';
import { Provincia } from '../../../shared/models/provincia';


@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {


  public desdeAno:number;
  public ateAno:number;
  public desdeMes:string;
  public ateMes:string;

  public empresas: Array<Empresa>;
  public provincias: Array<Provincia>;
  public bacias: Array<Bacia>;
  public blocos: Array<Bloco>;

  public empresasSelected:Array<Empresa>;
  public selectedTextEmpresas:string;
  public provinciasSelected:Array<Provincia>;
  public selectedTextProvincias:string;
  public baciasSelected:Array<Bacia>;
  public selectedTextBacias:string;
  public blocosSelected:Array<Bloco>;
  public selectedTextBlocos:string;


  customAlertOptionsEmpresa: any = {
    header: 'Empresas',
    translucent: true,
    buttons: [
      {
        text: 'Cerrar',
        role: 'cancel',
        handler: () => {
          console.log('cancel')
        }
      },
      {
        text: 'Okkk',
        handler: (selectedValues: any) => {
          console.log('accion',selectedValues)
        }
      }
    ],
  };

  constructor(private empresaService: EmpresaService,
    private comunsService: ComunsService,
    private baciaService: BaciaService,
    private blocoService: BlocoService) { }

  ngOnInit() {

    this.inicializarIntervaloDatas();

    this.selectedTextEmpresas = 'Todas';
    this.selectedTextProvincias = 'Todas';
    this.selectedTextBacias = 'Todas';
    this.selectedTextBlocos = 'Todos';


    

    //TODO: LOAD IN BOOTSTRAPING PRINCIPAL MODULE
    this.empresaService.getEmpresas().then((resp: Array<Empresa>) => {
      this.empresas = resp;
      this.empresasSelected = resp;
    });

    this.comunsService.getProvincias().then((resp:Array<Provincia>)=>{
      this.provincias = resp;
      this.provinciasSelected = resp;
    });

    //TODO: LOAD IN BOOTSTRAPING PRINCIPAL MODULE

    this.baciaService.getBacias().then((resp: Array<Bacia>) => {
      this.bacias = resp;
      this.baciasSelected = resp;
      //TODO: LOAD IN BOOTSTRAPING PRINCIPAL MODULE    
      this.blocoService.getAllBlocos(this.bacias).then((resp: Array<Bloco>) => {
        this.blocos = resp;
        this.blocosSelected = resp;
      });
    });
  }

  inicializarIntervaloDatas(){
    
    const dataAtual = new Date();
    this.ateAno = dataAtual.getFullYear();
    this.ateMes = this.comunsService.getLabelMes( dataAtual.getMonth() +1);
    this.desdeAno = this.ateAno;
    this.desdeMes = 'enr';
  }


  onChangeSelectEmpresas(event:any){
    console.log(event.detail.value);
    this.selectedTextEmpresas = 'Algunas...';
  }
  onChangeSelectProvincias(event:any){
    console.log(event.detail.value);
    this.selectedTextProvincias = 'Algunas...';
  }
  onChangeSelectBacias(event:any){
    console.log(event.detail.value);
    this.selectedTextBacias = 'Algunas...';
  }
  onChangeSelectBlocos(event:any){
    console.log(event.detail.value);
    this.selectedTextBlocos = 'Algunos...';
  }

  submitFilter(){
    console.log('submit')
  }

}
