import { Component, ViewChild } from '@angular/core';
import { ExpandableComponent}  from 'src/app/shared/components/expandable/expandable.component';

@Component({
  selector: 'app-tab-faq',
  templateUrl: 'tab-faq.page.html',
  styleUrls: ['tab-faq.page.scss']
})
export class TabFaq {
    
  items: any = [];
  itemHeight: number = 0;

  constructor() {
    this.items = [
      {
        expanded: false,
        question: 'question 1',
        answer: 'answer 1',
      },
      {
        expanded: false,
        question: 'question 2',
        answer: 'answer 2',
      },
      {
        expanded: false,
        question: 'question 3',
        answer: 'answer 3',
      },
      {
        expanded: false,
        question: 'question 4',
        answer: 'answer 4',
      },
      {
        expanded: false,
        question: 'question 5',
        answer: 'answer 5',
      },
      {
        expanded: false,
        question: 'question 6',
        answer: 'answer 6',
      },
      {
        expanded: false,
        question: 'question 7',
        answer: 'answer 7',
      },
      {
        expanded: false,
        question: 'question 8',
        answer: 'answer 8',
      },
      {
        expanded: false,
        question: 'question 9',
        answer: 'answer 9',
      },
  ];
  }

  expandItem(item){ 
    this.items.map((listItem) => {
        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
}

}
