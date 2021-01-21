import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa10Page } from './mapa10.page';

describe('Mapa10Page', () => {
  let component: Mapa10Page;
  let fixture: ComponentFixture<Mapa10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
