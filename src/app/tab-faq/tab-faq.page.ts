import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaq } from '../shared/interfaces/ifaq.interface';
import { FaqService } from '../shared/services/faq.service';

@Component({
  selector: 'app-tab-faq',
  templateUrl: 'tab-faq.page.html',
  styleUrls: ['tab-faq.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabFaq {

  faqs$: Observable<IFaq[]>;

  constructor(private faqService: FaqService) {
    this.faqs$ = this.faqService.getAllFaqs();
  }

}
