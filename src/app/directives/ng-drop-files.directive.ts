import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { FileItem } from '../models/file-item';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos:FileItem[] = [];
  @Output() mouseSobre:EventEmitter<boolean> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event:Event) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave() {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event:Event) {
    const transferencia = this._getTransferencia(event);
    this._prevenirDetener(event);
    this.mouseSobre.emit(false);
    
    if (!transferencia) {
      return;
    }
    this._extraerArchivos(event, transferencia.files);
  }

  private _getTransferencia(event:any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos(event:any, archivosLista:FileList) {
    // console.log(archivosLista);
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemporal = archivosLista[propiedad];
      if (this._archivoPuedeSerCargado(archivoTemporal)) {
        let urlPrevisualizacion = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.dataTransfer.files[propiedad]));
        archivoTemporal['urlPrevisualizacion'] = urlPrevisualizacion;
        let desc = '';
        archivoTemporal['desc'] = desc;
        let tipoArchivo = archivoTemporal.type;
        archivoTemporal['tipoArchivo'] = tipoArchivo;
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }
    // console.log(this.archivos);
  }

  // Validaciones
  private _archivoPuedeSerCargado(archivo:File):boolean {
    if ( !this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type) ) {
      return true;
    } else {
        return false;
      }
  }

  private _prevenirDetener(event:Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaFueDroppeado(nombreArchivo:string):boolean {
    for ( const archivo of this.archivos ) {
      if ( archivo.nombreArchivo === nombreArchivo ) {
        this.MostrarError(`El archivo ${nombreArchivo} ya esta agregado`);
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo:string):boolean {
    if (tipoArchivo === '' || tipoArchivo === undefined || !tipoArchivo.startsWith('image')) {
      this.MostrarError(`El formato ${tipoArchivo} no es valido, debe ser una imagen`);
      return false;
    } else {
        return true;
      }
  }

  MostrarError(msgError:string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      type: 'error',
      title: msgError
    });
  }

}