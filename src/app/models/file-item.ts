import { SafeUrl } from '@angular/platform-browser';

export class FileItem {
  public archivo:File;
  public desc:string;
  public estaSubiendo:boolean;
  public nombreArchivo:string;
  public progreso:number;
  public tipoArchivo:string;
  public url: string;
  public urlPrevisualizacion:SafeUrl;

  constructor(archivo:any) {
    this.archivo = archivo;
    this.desc = archivo.desc;
    this.estaSubiendo = false;
    this.nombreArchivo = archivo.name;
    this.progreso = 0;
    this.tipoArchivo = archivo.tipoArchivo;
    this.urlPrevisualizacion = archivo.urlPrevisualizacion;
  }
}