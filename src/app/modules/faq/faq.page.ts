import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaq } from '../shared/interfaces/ifaq.interface';
import { FaqService } from '../shared/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqs$: Observable<IFaq[]>;

  constructor(private faqService: FaqService) {
    this.faqs$ = this.faqService.getAllFaqs();
  }

  ngOnInit() {
  }

}
