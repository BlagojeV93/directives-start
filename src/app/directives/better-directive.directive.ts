import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'green';
  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  this.backgroundColor = this.defaultColor;
  // this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'green');
    
  }

  @HostBinding('style.backgroundColor') backgroundColor: string; 

  @HostListener('mouseenter') mouseover (eventData: Event){
    // this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave (eventData: Event){
    // this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}
