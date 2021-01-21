import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa8Page } from './mapa8.page';

describe('Mapa8Page', () => {
  let component: Mapa8Page;
  let fixture: ComponentFixture<Mapa8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
