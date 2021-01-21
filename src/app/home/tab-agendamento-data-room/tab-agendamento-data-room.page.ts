import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-tab-agendamento-data-room',
  templateUrl: 'tab-agendamento-data-room.page.html',
  styleUrls: ['tab-agendamento-data-room.page.scss']
})
export class TabAgendamentoDataRoom {
  /* https://www.positronx.io/ionic-calendar-ui-tutorial-examples-from-scratch/ */
  date: string;
  type: 'string';

  dateMulti: string[];
  
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    monthPickerFormat: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    weekStart: 1,
    showToggleButtons: true,
    to: 0
  };
    
  constructor() { }

  onChange($event) {
    console.log($event);
    console.log(this.dateMulti);
  }  
}
