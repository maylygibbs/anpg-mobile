import { Component, ViewChild, OnInit, Inject, LOCALE_ID, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponentOptions } from 'ion2-calendar';
import { AgendamentoService } from 'src/app/shared/services/agendamento.service';
import { IAgendamento } from 'src/app/shared/interfaces/iagendamento.interface';

@Component({
  selector: 'app-tab-agendamento-data-room',
  templateUrl: 'tab-agendamento-data-room.page.html',
  styleUrls: ['tab-agendamento-data-room.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabAgendamentoDataRoom {
  date: string;
  type: 'string';

  nome: string;
  empresa: string;
  qtdeVisitantes: number;
  email: string;
  areaInteresse: string;

  errorMessage: string;
  successMessage: string;
  
  /* https://www.positronx.io/ionic-calendar-ui-tutorial-examples-from-scratch/ */
  calendarOptions: CalendarComponentOptions = {
    pickMode: 'single',
    monthPickerFormat: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    weekStart: 1,
    showToggleButtons: true,
    showMonthPicker: true,
    to: 0
  };
    
  constructor(private agendamentoService: AgendamentoService) { 
    this.errorMessage = '';
    this.successMessage = '';
  }

  onChange($event) {
    console.log($event);
    console.log(this.date);
  }

  submeter(): any {
    const agendamento: IAgendamento = {
      date: this.date,
      nome: this.nome,
      empresa: this.empresa,
      qtdeVisitantes: this.qtdeVisitantes,
      email: this.email,
      areaInteresse: this.areaInteresse    
    };
    console.log(agendamento);
    if (!this.date || !this.nome || !this.empresa || !this.qtdeVisitantes || !this.email || !this.areaInteresse) {
      this.errorMessage = 'Existem campos não preenchidos.';
      this.successMessage = '';
      return null;
    } else {         
      this.errorMessage = '';
      this.successMessage = '';
      const req = this.agendamentoService.gravarAgendamento(agendamento)
      if (!req) {
        this.errorMessage = 'Falha ao gravar';
        this.successMessage = '';
        return null;
      } else {
        this.errorMessage = '';
        this.successMessage = 'Solicitação enviada';
        return req;
      }
    }
  }
}
