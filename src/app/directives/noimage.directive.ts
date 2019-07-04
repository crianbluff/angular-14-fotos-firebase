import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'img[noimage]',
  host: {
    '(error)':'actualizarUrl()',
    '(cargar)': 'cargar()',
    '[src]': 'src'
  }
})
  
export class NoimageDirective {

  @Input() src:string;
  RutaNoImage = 'assets/images/noimage.jpg';

  actualizarUrl() {
    this.src = this.RutaNoImage;
  }

  cargar() {
    this.src = this.src;
  }

}