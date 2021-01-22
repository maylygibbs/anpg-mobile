import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kwanza',
  templateUrl: './kwanza.page.html',
  styleUrls: ['./kwanza.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KwanzaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
