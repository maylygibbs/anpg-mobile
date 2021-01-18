import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabAgendamentoDataRoom } from './tab-agendamento-data-room.page';

describe('TabAgendamentoDataRoom', () => {
  let component: TabAgendamentoDataRoom;
  let fixture: ComponentFixture<TabAgendamentoDataRoom>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabAgendamentoDataRoom],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabAgendamentoDataRoom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
