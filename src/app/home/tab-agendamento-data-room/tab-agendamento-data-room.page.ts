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
  data: string;
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
    
  constructor(private agendamentoService: AgendamentoService, public alertController: AlertController) { 
    this.errorMessage = '';
    this.successMessage = '';
  }

  onChange($event) {
    console.log($event);
    console.log(this.data);
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Erro de validação',
      message: 'Por favor preencha os campos em falta.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentSucess() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sucesso',
      subHeader: 'Pedido enviado',
      message: 'Pedido de agendamento enviado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  submeter(): any {
    const agendamento: IAgendamento = {
      data: new Date(this.data),
      nome: this.nome,
      empresa: this.empresa,
      nVisitantes: this.qtdeVisitantes,
      email: this.email,
      areaInteresse: this.areaInteresse    
    };
    console.log(agendamento);
    if (!this.data || !this.nome || !this.empresa || !this.qtdeVisitantes || !this.email || !this.areaInteresse) {
      //this.errorMessage = 'Por favor preencha os campos em falta.';
      //this.successMessage = '';
      this.presentAlert();
      return null;
    } else {         
      this.errorMessage = '';
      this.successMessage = '';
      const req = this.agendamentoService.gravarAgendamento(agendamento)
      if (!req) {
        this.errorMessage = 'Erro ao gravar.';
        this.successMessage = '';
        return null;
      } else {
        this.data="";
        this.nome="";
        this.empresa="";
        this.qtdeVisitantes=0;
        this.email="";
        this.areaInteresse="";
        this.errorMessage = '';
        //this.successMessage = 'Agendamento enviado com sucesso!';
        this.presentSucess();
        return req;
      }
    }
  }
}
