import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa4Page } from './mapa4.page';

describe('Mapa4Page', () => {
  let component: Mapa4Page;
  let fixture: ComponentFixture<Mapa4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
