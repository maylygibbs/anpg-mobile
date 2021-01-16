import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFaq } from './tab-faq.page';

describe('TabFaq', () => {
  let component: TabFaq;
  let fixture: ComponentFixture<TabFaq>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabFaq],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
