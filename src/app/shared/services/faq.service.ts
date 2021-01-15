import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFaq } from '../interfaces/ifaq.interface';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  itemHeight: number = 0;

  faqItems: IFaq[] = 
  [
      {
        expanded: false,
        question: 'Question 1',
        answer: 'Answer 1',
      },
      {
        expanded: false,
        question: 'Question 2',
        answer: 'Answer 3',
      },
      {
        expanded: false,
        question: 'Question 3',
        answer: 'Answer 3',
      },
      {
        expanded: false,
        question: 'Question 4',
        answer: 'Answer 4',
      },
      {
        expanded: false,
        question: 'Question 5',
        answer: 'Answer 5',
      },
      {
        expanded: false,
        question: 'Question 6',
        answer: 'Answer 6',
      },
      {
        expanded: false,
        question: 'Question 7',
        answer: 'Answer 7',
      },
      {
        expanded: false,
        question: 'Question 8',
        answer: 'Answer 8',
      },
      {
        expanded: false,
        question: 'Question 9',
        answer: 'Answer 9',
      },
  ];

  constructor() { }

  getAllFaqs(): Observable<IFaq[]> {
    return of(this.faqItems);
  }
}
