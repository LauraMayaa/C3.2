import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('class.firstElement') highlight: boolean;

  constructor() {
    this.highlight = false
  }

  ngOnInit(): void {

  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.highlight = true;
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.highlight = false
  }

}
