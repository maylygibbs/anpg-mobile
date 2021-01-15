import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabNewsDetalhe } from './tab-news-detalhe.page';

describe('TabNewsDetalhe', () => {
  let component: TabNewsDetalhe;
  let fixture: ComponentFixture<TabNewsDetalhe>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabNewsDetalhe],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabNewsDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
