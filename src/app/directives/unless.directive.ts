import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import {  } from '@angular/core/src/linker/view_container_ref';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
    if (!condition){
      this.viewCont.createEmbeddedView(this.templateRef);
    }else{
      this.viewCont.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewCont: ViewContainerRef) { }

}
