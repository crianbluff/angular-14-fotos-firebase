import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

  estaSobreElemento:boolean = false;
  archivos:FileItem[] = [];

  constructor(public _cargaImagenes:CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos() {
    this.archivos = [];
  }

  // @Output() onChange: EventEmitter<File> = new EventEmitter<File>();
  // updateSource($event: Event) {
  //   this.projectImage($event.target['files'][0]);
  // }

  // source:string = '';
  // projectImage(file: File) {
  //   let reader = new FileReader;
  //   reader.onload = (e: any) => {
  //     this.source = e.target.result;
  //     this.onChange.emit(file);
  //   };
    
  //   reader.readAsDataURL(file);
  // }

}