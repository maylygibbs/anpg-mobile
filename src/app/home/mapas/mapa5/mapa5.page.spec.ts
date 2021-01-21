import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mapa5Page } from './mapa5.page';

describe('Mapa5Page', () => {
  let component: Mapa5Page;
  let fixture: ComponentFixture<Mapa5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mapa5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
