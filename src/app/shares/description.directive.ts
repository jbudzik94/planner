import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDescription]'
})
export class DescriptionDirective {

  @Input()
  private description: string;
  private paragraph;



  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
    this.paragraph.className = 'description';

  }

  @HostListener('mouseenter')
  mouseenter(eventDesc: Event) {
    if (this.description !== undefined) {
      this.paragraph.innerHTML = this.description;
      this.renderer.appendChild(this.element.nativeElement, this.paragraph);
    }

  }

  @HostListener('mouseleave')
  mouseleave(eventDesc: Event) {
    if (this.description !== undefined) {
      this.renderer.removeChild(this.element.nativeElement, this.paragraph);
    }
  }
}
