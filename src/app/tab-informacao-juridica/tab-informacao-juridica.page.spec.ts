import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabInformacaoJuridica } from './tab-informacao-juridica.page';

describe('TabInformacaoJuridica', () => {
  let component: TabInformacaoJuridica;
  let fixture: ComponentFixture<TabInformacaoJuridica>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabInformacaoJuridica],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabInformacaoJuridica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
