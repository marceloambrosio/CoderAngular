import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSizeTitulo]'
})
export class SizeTituloDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(this.elemento.nativeElement, 'fontSize', '20px');
  }

}
