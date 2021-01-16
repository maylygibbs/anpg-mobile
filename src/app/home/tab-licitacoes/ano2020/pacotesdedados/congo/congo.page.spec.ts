import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CongoPage } from './congo.page';

describe('CongoPage', () => {
  let component: CongoPage;
  let fixture: ComponentFixture<CongoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CongoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
