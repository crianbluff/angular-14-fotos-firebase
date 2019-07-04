import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';
import { FileItem } from '../models/file-item';

@Injectable()
export class CargaImagenesService {

  numeroImagenes = 0;
  almacenarLengthArrayActual = 0;
  almacenarLengthArrayAnterior = 0;

  private CARPETA_IMAGENES = 'img';

  constructor(private db:AngularFirestore) { }

  cargarImagenesFirebase(imagenes:FileItem[]) {
    // console.log(imagenes);

    const storageRef = firebase.storage().ref();

    this.almacenarLengthArrayAnterior = this.almacenarLengthArrayActual;
    this.numeroImagenes = imagenes.length - this.almacenarLengthArrayAnterior;
    this.almacenarLengthArrayActual = imagenes.length;

    let imagenesCalculo = this.numeroImagenes - this.numeroImagenes + 1;
    for ( const item of imagenes ) {

      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      // console.log(item);

      const uploadTask:firebase.storage.UploadTask = 
      storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
      .put(item.archivo);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot:firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir', error),
        () => {
          item.estaSubiendo = false;
          storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).getDownloadURL()
          .then(url => {
            this.guardarImagen({
              desc: item.desc,
              price: item.price,
              title: item.title,
              url: url
            });  
            let imagenesCargadas = imagenesCalculo++;
            if ( imagenesCargadas === this.numeroImagenes ) {
              if (imagenes.length > 1) {
                this.MostrarOk(`${imagenesCargadas} Imagenes cargada a firebase`);
              }
              else if (imagenes.length <= 1) {
                this.MostrarOk('Imagen cargada a firebase');
              }
            }
          });
        });
      }
  }

  private guardarImagen(imagen: { desc:string, price:string, title:string, url:string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
    .add(imagen);
  }

  MostrarOk(msgSuccess) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      type: 'success',
      title: msgSuccess
    });
  }
}