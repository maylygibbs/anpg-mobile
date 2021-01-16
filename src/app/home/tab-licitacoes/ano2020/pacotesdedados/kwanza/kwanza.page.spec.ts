import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KwanzaPage } from './kwanza.page';

describe('KwanzaPage', () => {
  let component: KwanzaPage;
  let fixture: ComponentFixture<KwanzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwanzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KwanzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
