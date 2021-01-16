import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtilizadorPage } from './utilizador.page';

describe('UtilizadorPage', () => {
  let component: UtilizadorPage;
  let fixture: ComponentFixture<UtilizadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilizadorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtilizadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
