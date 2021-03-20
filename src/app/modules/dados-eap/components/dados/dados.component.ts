import { Component, OnInit } from '@angular/core';

import { PaginationResponse } from '../../../shared/models/pagination-response';
import { ProducaoService } from '../../../shared/services/producao.service';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss'],
})
export class DadosComponent implements OnInit {

  public producaoResponse: PaginationResponse;
  public page: number = 1;
  public rowByPage: number = 5;

  constructor(private producaoService: ProducaoService) { }

  ngOnInit() {   

    this.producaoService.consulteProducao(this.page, this.rowByPage).then(
      (resp: PaginationResponse) => {
        console.log('resp',resp)
        this.producaoResponse = resp;
      }
    );

  }

}
