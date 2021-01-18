import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OilStickerComponent } from './oil-sticker.component';

describe('OilStickerComponent', () => {
  let component: OilStickerComponent;
  let fixture: ComponentFixture<OilStickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilStickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OilStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
