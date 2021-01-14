import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabLicitacoes } from './tab-licitacoes.page';

describe('TabLicitacoes', () => {
  let component: TabLicitacoes;
  let fixture: ComponentFixture<TabLicitacoes>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabLicitacoes],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabLicitacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
