import { Component, AfterViewInit, Input, ViewChild,  ElementRef, Renderer2, HostListener } from "@angular/core";

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit  {

  @ViewChild("wrapper", { read: ElementRef }) wrapper: ElementRef;
  @Input("expanded") expanded;
  @Input("height") height;
/*
  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.wrapper.nativeElement, 'height', this.height + 'px');
  }*/


  constructor(public renderer: Renderer2) {}

  ngAfterViewInit(){
    if(this.height){
      this.wrapper.nativeElement.setElementStyle(this.wrapper.nativeElement, 'height', this.height + 'px');
      /*
      this.renderer.setElementStyle(this.wrapper.nativeElement, 'height', this.height + 'px');    
      */
    }
  }

}