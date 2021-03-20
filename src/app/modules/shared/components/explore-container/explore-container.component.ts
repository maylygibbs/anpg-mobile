import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {}

}
