import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';


class HideAfterContext {
    appHideAfter : number = 0;
    counter = 0
}
//appHideAfter <===> Input appHideAfter : same name


@Directive({
  selector: '[appHideAfter]'
})

export class HideAfterDirective implements OnChanges{


  constructor(
    private container : ViewContainerRef,
    private template : TemplateRef<any>
  ) { }

  @Input('appHideAfter') delay : number = 0
  @Input('appHideAfterThen') placeholder : TemplateRef<any> | null = null
  context = new HideAfterContext()

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['delay'])
    this.container.clear()
    this.context.counter = this.context.appHideAfter = changes['delay'].currentValue / 1000
    this.container.createEmbeddedView(this.template, this.context)
    setTimeout(() => {
      this.container.clear()
      if(this.placeholder){
        this.container.createEmbeddedView(this.placeholder, this.context)
      }
      clearInterval(intervalId)
    }, changes['delay'].currentValue);

    let intervalId = setInterval(()=>{
      this.context.counter--
    },1000)
  }
}
