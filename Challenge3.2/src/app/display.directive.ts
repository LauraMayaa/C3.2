import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplay]'
})
export class DisplayDirective {

  @Input() set appDisplay(condition: boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef)
    } else {
      this.vwRef.clear();
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

}
