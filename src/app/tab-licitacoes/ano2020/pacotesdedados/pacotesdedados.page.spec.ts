import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacotesdedadosPage } from './pacotesdedados.page';

describe('PacotesdedadosPage', () => {
  let component: PacotesdedadosPage;
  let fixture: ComponentFixture<PacotesdedadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacotesdedadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacotesdedadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
