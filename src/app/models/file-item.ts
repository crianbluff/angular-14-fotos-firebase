import { SafeUrl } from '@angular/platform-browser';

export class FileItem {
  public archivo:File;
  public desc:string;
  public estaSubiendo:boolean;
  public nombreArchivo:string;
  public price:string;
  public progreso:number;
  public tipoArchivo:string;
  public title:string;
  public url: string;
  public urlPrevisualizacion:SafeUrl;

  constructor(archivo:any) {
    this.archivo = archivo;
    this.desc = archivo.desc;
    this.estaSubiendo = false;
    this.nombreArchivo = archivo.name;
    this.price = archivo.price;
    this.progreso = 0;
    this.tipoArchivo = archivo.tipoArchivo;
    this.title = archivo.title;
    this.urlPrevisualizacion = archivo.urlPrevisualizacion;
  }
}