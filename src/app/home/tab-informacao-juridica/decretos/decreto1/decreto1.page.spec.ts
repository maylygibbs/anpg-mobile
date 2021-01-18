import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Decreto1Page } from './decreto1.page';

describe('Decreto1Page', () => {
  let component: Decreto1Page;
  let fixture: ComponentFixture<Decreto1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Decreto1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Decreto1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
