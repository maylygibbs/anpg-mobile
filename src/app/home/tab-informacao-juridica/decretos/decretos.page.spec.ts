import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecretosPage } from './decretos.page';

describe('DecretosPage', () => {
  let component: DecretosPage;
  let fixture: ComponentFixture<DecretosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecretosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecretosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
