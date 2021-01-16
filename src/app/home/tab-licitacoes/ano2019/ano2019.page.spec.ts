import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ano2019Page } from './ano2019.page';

describe('Ano2019Page', () => {
  let component: Ano2019Page;
  let fixture: ComponentFixture<Ano2019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ano2019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ano2019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
