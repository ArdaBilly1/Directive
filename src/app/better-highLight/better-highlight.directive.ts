import { Directive, ElementRef, Renderer2, OnInit, HostListener,HostBinding, Input } from '@angular/core';
import { MockDirectiveResolver } from '@angular/compiler/testing';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
 @Input() defaultColor:string='transparent';
 @Input() hightlightColor:string='blue';
 // @HostBinding('style.backgroundColor')backgroundColor:string='transparent';
  @HostBinding('style.backgroundColor')backgroundColor:string=this.defaultColor;
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }



  ngOnInit() {
   //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    
  }
  @HostListener('mouseover')mouseover(eventData:Event){
   //this.backgroundColor='blue';
    this.backgroundColor=this.hightlightColor;
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
  @HostListener('mouseleave')mouseleave(eventData:Event){
  this.backgroundColor=this.defaultColor;

    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }
  

}
