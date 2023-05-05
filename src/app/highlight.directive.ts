import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || this.default,'white')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('','black')
  }

  @Input() appHighlight = ''
  @Input() default = ''

  constructor(private ele : ElementRef) { }

  highlight(bgColor : string, color : string){
    this.ele.nativeElement.style.backgroundColor = bgColor
    this.ele.nativeElement.style.color = color
  }

}
