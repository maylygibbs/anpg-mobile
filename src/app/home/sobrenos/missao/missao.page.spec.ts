import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MissaoPage } from './missao.page';

describe('MissaoPage', () => {
  let component: MissaoPage;
  let fixture: ComponentFixture<MissaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MissaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
