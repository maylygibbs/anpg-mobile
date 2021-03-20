import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConselhoadministracaoPage } from './conselhoadministracao.page';

describe('ConselhoadministracaoPage', () => {
  let component: ConselhoadministracaoPage;
  let fixture: ComponentFixture<ConselhoadministracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConselhoadministracaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConselhoadministracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
