import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'img[noimage]',
  host: {
    '(error)':'actualizarUrl()',
    '(cargar)': 'cargar()',
    '[src]':'src'
    }
})
  
export class NoimageDirective {

  RutaNoImage = 'assets/images/noimage.jpg';

  @Input() src:string;

  actualizarUrl() {
    this.src = this.RutaNoImage;
  }

  cargar() {
    this.src = this.src;
  }

}